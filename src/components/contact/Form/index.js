import React from 'react';
//styles
import './form.scss';
//comps
import MyCustomForm from '../../common/myCustomForm';
import { required, email } from './fieldValidations';

const Form = () => {
    return (
        <div className={'form-container'}>
            <MyCustomForm
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: 'Name (Required)',
                        validations: [required],
                        placeholder: 'Name'
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: 'Email (Required)',
                        validations: [email],
                        placeholder: 'Mail'
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: 'Message',
                        placeholder: 'Message'
                    }
                ]}
                onSuccessMessage={'Your message has been successfully sent. We will contact you very soon!'}
                onErrorMessage={'Please try again in some minutes'}
                submitButtonLabel={'SEND'}
                customClass={'inspir-contact-form'}
            />
            {/*<form className={'form'}>*/}
            {/*    <section className={'form-item'}>*/}
            {/*        <input type={'text'} name={'mail'} id={'mail'} className={'form-input'} placeholder={'NAME'}/>*/}
            {/*    </section>*/}
            {/*    <section className={'form-item'}>*/}
            {/*        <input type={'text'} name={'subject'} id={'subject'} className={'form-input'} placeholder={'E-MAIL'}/>*/}
            {/*    </section>*/}
            {/*    <section className={'form-item'}>*/}
            {/*        <textarea id={'message'} name={'message'} rows={'6'} cols={'40'} className={'form-input-box'} placeholder={'MESSAGE'}/>*/}
            {/*    </section>*/}
            {/*    <section className={'form-item button'}>*/}
            {/*        <input type={'submit'} value={'SEND'} className={'form-input-button'}/>*/}
            {/*    </section>*/}
            {/*</form>*/}
        </div>
    )
};

export default Form;