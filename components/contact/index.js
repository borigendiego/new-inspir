import React from 'react';
//styles
import styles from './contact.module.scss';
//components and constants
import { Form } from 'hippo-components';
//Validations
import { required, email } from './fieldValidations';

const Contact = () => {
    return (
        <div className={styles.container} id={'CONTACT'}>
            <div className={styles.content}>
                <div className={styles.logo_text_icon}>
                    <div className={styles.logo_container}>
                        <img
                            src={'/assets/images/logo.png'}
                            alt={'logo'}
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.text_container}>
                        <h2 className={styles.text}>FRANCE - PARIS</h2>
                        <h2 className={styles.text}>AUSTRALIA - MELBOURNE</h2>
                    </div>
                </div>
                <Form
                    fields={[
                        {
                            name: 'name',
                            type: 'text',
                            placeholder: 'NAME',
                            label: 'Name (Required)',
                            validations: [required],
                        },
                        {
                            name: 'customerEmail',
                            placeholder: 'EMAIL',
                            type: 'text',
                            label: 'Email (Required)',
                            validations: [email],
                        },
                        {
                            name: 'message',
                            placeholder: 'MESSAGE',
                            type: 'textArea',
                            label: 'Message',
                        }
                    ]}
                    onSuccessMessage={'Your message has been successfully sent. We will contact you very soon!'}
                    onErrorMessage={'Something went wrong. Please try again in some minutes'}
                    submitButtonLabel={'SEND'}
                    customClass={'inspir-contact-form'}
                    emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/inspir-mail'}
                />
            </div>
            <div className={styles.last}>
                <div className={styles.emails}>
                    <p>bregnier@inspirperformance.com</p>
                    <p>melbourne@inspirperformance.com</p>
                </div>
                <h1 className={styles.title}>CONTACT US</h1>
            </div>
        </div>
    )
};

export default Contact
