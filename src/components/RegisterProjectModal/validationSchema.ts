import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Este campo é obrigatório'),
  price: Yup.string()
    .required('Este campo é obrigatório'),
});
