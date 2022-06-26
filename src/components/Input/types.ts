import React from 'react';

export interface IInputProps {
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
  onFocus?: React.FocusEventHandler<any>;
  onBlur?: React.FocusEventHandler<any>;
  disabled?: boolean;
  value?: any;
  prefix?: string;
  onChange?: any;
  label?: string;
  required?: boolean;
  autoComplete?: string;
  style?: any;
}
