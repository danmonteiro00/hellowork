import { FormikProps } from 'formik'

export interface IFormValues {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IFormProps {
  loading: boolean,
  fullName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  onSignUpFormSubmit: (values: IFormValues) => Promise<void>,
}

export type FormProps = FormikProps<IFormValues> & IFormProps;
