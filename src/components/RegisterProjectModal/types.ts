import { FormikProps } from "formik";

export interface IFormValues {
  name: string;
  description: string;
  price: string;
}

export interface IFormProps {
  loading: boolean;
  name?: string;
  description?: string;
  price?: string;
  isVisible: boolean;
  onModalClose(): void;
  onFormSubmit(values: IFormValues): Promise<void>;
}

export type FormProps = FormikProps<IFormValues> & IFormProps;
