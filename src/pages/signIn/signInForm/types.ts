import { FormikProps } from 'formik'

export interface IFormValues {
  email: string;
  password: string;
}

export interface IFormProps {
  loading: boolean,
  email?: string;
  password?: string;
  onSignInFormSubmit: (values: IFormValues) => Promise<void>,
}

export type FormProps = FormikProps<IFormValues> & IFormProps;
