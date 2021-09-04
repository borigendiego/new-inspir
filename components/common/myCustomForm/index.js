import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';

const MyCustomForm = ({ fields, onSuccessMessage, onErrorMessage, customClass, submitButtonLabel }) => {
    const [messageSent, setMessageSent] = useState('');
    const initialValues = {
        name: '',
        customerEmail: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
        setValues,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: () => {
            axios.post(
                'https://thehippoapi.netlify.app/.netlify/functions/api/inspir-mail',
                {
                    subject: values.subject,
                    message: values.message,
                    name: values.name,
                    customerEmail: values.customerEmail,
                    },
            {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                    },
                }
                )
                .then(function (response) {
                    setValues(initialValues);
                    setMessageSent('succeed');
                })
                .catch(function (error) {
                    console.log(">>Error", error);
                    setMessageSent('error');
                });
        }
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={'message succeed'}>
                <h2>Thank you!</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={'message error'}>
                <h2>Something went wrong</h2>
                <p>{onErrorMessage}</p>
            </div>
        }
        return null;
    };

    return (
        <form className={`contact-form ${customClass}`} onSubmit={(event) => handleSubmit(event)}>
            {
             fields.map((field) => {
                 const { name, type, label, validations, selectOptions, size, placeholder } = field;

                 switch (type) {
                     case 'text':
                         return (
                             <MyInput
                                 key={name}
                                 fieldName={name}
                                 id={name}
                                 fieldType={'text'}
                                 label={label}
                                 handleChange={handleChange}
                                 value={values[name]}
                                 validations={validations}
                                 errors={errors}
                                 size={size}
                                 placeholder={placeholder}
                             />
                         );
                     case 'textArea':
                         return (
                             <section className={'contact-item'} key={name}>
                                 <label className={'contact-label'}>{label}</label>
                                 <textarea
                                     name={name}
                                     id={name}
                                     onChange={handleChange}
                                     value={values[name]}
                                     rows={'5'}
                                     cols={'40'}
                                     className={'contact-input-box'}
                                     placeholder={placeholder}
                                 />
                             </section>
                         );
                     case 'select':
                         return (
                             <select key={name} className={'contact-select'}>
                                 {
                                     selectOptions.map(option => <option value={option.value}>{option.label}</option>)
                                 }
                             </select>
                         );
                     default:
                         return (
                         <MyInput
                             key={name}
                             fieldName={name}
                             id={name}
                             fieldType={'text'}
                             label={label}
                             handleChange={handleChange}
                             value={values[name]}
                             validations={validations}
                             errors={errors}
                             placeholder={placeholder}
                         />
                     )
                 }
             })
            }
            {renderSentMessage()}
            <section className={'contact-item'}>
                <input type={'submit'} value={submitButtonLabel ? submitButtonLabel : 'SEND'} className={'contact-input-button'}/>
            </section>
        </form>
    )
};

MyCustomForm.propTypes = {
    fields: PropTypes.array,
    onSuccessMessage: PropTypes.string,
    onErrorMessage: PropTypes.string,
    customClass: PropTypes.string,
    submitButtonLabel: PropTypes.string,
};

export default MyCustomForm
