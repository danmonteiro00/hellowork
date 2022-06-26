import React, { FormEvent } from 'react';
import { useField, useFormikContext } from 'formik';
import { Form } from 'react-bootstrap';
import { IInputProps } from './types';
import { Control } from './styles';

const { Label, Text } = Form;

export const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const {
    type,
    name,
    id,
    placeholder,
    onFocus,
    onBlur,
    disabled,
    value,
    prefix,
    onChange,
    label,
    required,
    autoComplete,
    style
  } = props;
  const [field, meta, helpers] = useField(props);
  const formikContext = useFormikContext();

  const onFieldChange = (e: FormEvent<HTMLInputElement>) => {
    helpers.setValue(e.currentTarget.value);
  };

  return (
    <>
      {!!label && (
        <Label htmlFor={name}>
          {label}
        </Label>
      )}
      <Control
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={field.value || value}
        onChange={onChange ?? onFieldChange}
        onBlur={onBlur ?? field.onBlur}
        onFocus={onFocus ?? formikContext.handleBlur}
        disabled={disabled}
        prefix={prefix}
        required={required}
        autoComplete={autoComplete}
        style={style}
      />
      {meta.error && (
        <Text className='text-danger'>
          {meta.error}
        </Text>
      )}
    </>
  );
};

Input.defaultProps = {
  placeholder: '',
};
