import React from 'react';
//comps
import MyCustomForm from '../../common/myCustomForm';
import { required, email } from '../fieldValidations';

const Form = () => {
    //TODO: Remove this file... we are using Hippo-componets
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
        </div>
    )
};

export default Form;
