import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({ fieldName, fieldType, label, handleChange, value, validations, errors, size, placeholder }) => {

    return (
        <section className={size === 'half' ? 'contact-item half'  : 'contact-item'}>
            <label className={'contact-label'}>{label}</label>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                className={errors && errors[fieldName] ? 'contact-input error' : 'contact-input'}
                onChange={(event) => handleChange(event, validations)}
                value={value}
                placeholder={placeholder}
            />
            <span className={'error-message'}>{errors ? errors[fieldName] : null}</span>
        </section>
    )
};

CustomInput.propTypes = {
    validations: PropTypes.array,
    fieldName: PropTypes.string,
    fieldType: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    errors: PropTypes.object,
};

export default CustomInput