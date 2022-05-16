import { Link } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import './styles.css';

export const Home = () => {
    return (
        <>
            <TopBar />
            <div className='top-home'>
                <div className='welcome'>
                    <h1 className='title-home'>Seja bem vindo a {"<Hello Work!>"}</h1>
                    <p className='homeTxt'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor sint.
                        Velit officia consequat duis enim velit.
                    </p>
                    <Link to={"/signIn"}>
                    <button>Cadastrar</button>
                    </Link>
                </div>
            </div>
        </>

    )
}