import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik'
import TopBar from '../../../components/TopBar';
import { Input } from '../../../components/Input';
import { FormProps, IFormProps, IFormValues } from './types';
import loginImage from '../../../assets/login-image.svg';
import { validationSchema } from './validationSchema';

import './styles.css';

const InnerForm: React.FC<FormProps> = (props: FormProps) => {
  const { handleSubmit } = props;

  return (
    <>
      <TopBar />
      <form onSubmit={handleSubmit}>
        <div className="login-page">
          <div className="login-container">
            <div className="img-carousel">
              <img className="img-login" src={loginImage} alt="login" />
            </div>
            <div className="login-form">
              <h2>Login</h2>
              <div className="input-area">
                <Input type="email" name="email" id="email" placeholder="E-mail" style={{ width: '60%' }} />
              </div>
              <div className="input-area">
                <Input type="password" name="password" id="password" placeholder="Senha" style={{ width: '60%' }}/>
              </div>
              <div className="forgot-pass">
                <div className='checkbox-input'>
                  <input className="check-input" type="checkbox" />
                  <label className="rememberTxt">Lembrar de mim</label>
                </div>
                <a className="forgot-word">Esqueci a Senha</a>
              </div>
              <div className="btn-area">
                <button className="login-btn" type="submit">ENTRAR</button>
              </div>
              <div className="sign-area">
                <label className="sign-in">Ainda não é um {`<Worker!>`} ?, <Link to="/cadastrar"><button>Faça seu Cadastro!</button></Link></label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export const SignInForm = withFormik<IFormProps, IFormValues>({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema,
  handleSubmit: async (values, { props }): Promise<void> => props.onSignInFormSubmit(values),
})(InnerForm);
