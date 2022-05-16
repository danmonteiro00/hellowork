import { useState, useContext } from "react";
import { TopBar } from "../../components/TopBar";
import "./styles.css";
import imgLogin from '../../assets/images/img-login.png';

import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";


export const SignIn = () => {
    const { authenticated } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <TopBar />
            <form onSubmit={handleSubmit}>
                <div className="login-page">
                    <div className="login-container">
                        <div className="img-carousel">
                            <img className="img-login" src={imgLogin} alt="login" />
                        </div>

                        <div className="login-form">
                            <h2>Cadastrar</h2>
                            <div className="input-area">
                                <input className="login-input" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nome Completo" />
                            </div>
                            <div className="input-area">
                                <input className="login-input" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>
                            <div className="input-area">
                                <input className="login-input" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                            </div>
                            <div className="input-area">
                                <input className="login-input" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirmar Senha" />
                            </div>
                            <div className="forgot-pass">
                                <div><input className="check-input" type="checkbox" /> <label className="rememberTxt">Lembrar de mim</label></div>

                                <a className="forgot-word">Esqueci a Senha</a>
                            </div>

                            <div className="btn-area">
                                <button className="login-btn" type="submit">ENTRAR</button>
                            </div>

                            <div className="sign-area">
                                <label className="sign-in">Ainda não é um {`<Worker!>`} ?, <Link to={"/"}><button>Faça seu Cadastro!</button></Link></label>
                            </div>
                        </div>



                    </div>
                </div>
            </form>

        </>

    )
}