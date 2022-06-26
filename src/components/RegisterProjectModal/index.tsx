import React, { useMemo } from 'react';
import { withFormik } from 'formik';
import { Modal, Button } from 'react-bootstrap';
import { Input } from '../Input';
import { FormProps, IFormProps, IFormValues } from './types';
import { validationSchema } from './validationSchema';

export const InnerForm: React.FC<FormProps> = (props: FormProps) => {
  const { isVisible, onModalClose, handleSubmit, setFieldValue } = props;

  const handleSetCurrencyMask = useMemo(() => (
    e: React.FormEvent<HTMLInputElement>,
    name: string,
  ): React.FormEvent<HTMLInputElement> => {
    let { value } = e.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    e.currentTarget.value = value;
    setFieldValue(name, value)
    return e;
  }, []);

  return (
    <Modal
      show={isVisible}
      onHide={onModalClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar novo projeto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='register-project-form' onSubmit={handleSubmit}>
          <div className='d-flex flex-column'>
            <div className='d-flex flex-column py-2'>
              <Input
                label='Título'
                type="text"
                name="name"
                id="name"
                placeholder="Título do seu projeto"
              />
            </div>
            <div className='d-flex flex-column py-2'>
              <Input
                label='Descrição'
                type="text"
                name="description"
                id="description"
                placeholder="Descreva seu projeto"
              />
            </div>
            <div className='d-flex flex-column py-2'>
              <Input
                label='Valor'
                type="text"
                name="price"
                id="price"
                placeholder="Orçamento"
                onChange={(e: React.FormEvent<HTMLInputElement>) => handleSetCurrencyMask(e, 'price')}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type='submit' form='register-project-form' className='new-btn'>
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const RegisterProjectModal = withFormik<IFormProps, IFormValues>({
  mapPropsToValues: () => ({
    name: '',
    description: '',
    price: '',
  }),
  validationSchema,
  handleSubmit: async (values, { props }): Promise<void> => {
    const price = parseFloat(values.price.replace('.', '').replace(',', '.')).toString();
    await props.onFormSubmit({ ...values, price })
  },
})(InnerForm);
