import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Este campo é obrigatório')
    .email('Email inválido'),
  password: Yup.string()
    .required('Este campo é obrigatório'),
});
