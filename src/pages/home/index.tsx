import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import { Container } from './styles';
import { Button } from '../../styles/buttons';

export const Home: React.FC = () => {
  return (
    <>
      <TopBar />
      <Container className='top-home'>
        <div className='welcome'>
          <h1 className='title-home'>Seja bem vindo a {"<Hello Work!>"}</h1>
          <p className='homeTxt'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor sint.
            Velit officia consequat duis enim velit.
          </p>
          <Link to={"/cadastrar"}>
            <Button
              type='button' variant='primary'>Publicar Projeto</Button>
          </Link>
          <Link to={"/cadastrar"}>
            <Button type='button' variant='secondary'>Trabalhar como freelancer</Button>
          </Link>
        </div>
      </Container>
    </>
  )
}
