import React from 'react';
import { IFreelancerCard } from './types';

import './styles.css'

export const FreelancerCard: React.FC<IFreelancerCard> = (props: IFreelancerCard) => {
  const { freelancer } = props;

  return (
    <div className="container">
      <div className='person-card'>
        <div className='personal-infos'>
          <div>
            <img className='work-avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='Luffão' />
          </div>

          <div className='person-info'>
            <h4 className='person-name'>{freelancer.fullName}</h4>
            <p className='person-role'>Desenvolvedor(a)</p>
            <div className='star-div'>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <i className="bi bi-star-fill star-icon"></i>
              <p className='rank-info'>Nota - 10</p>
            </div>

            <label className='label-skills'>
              Principais Habilidades
            </label>

            <div className='main-skills'>
              <div className='skill-card' >
                NodeJS
              </div>
              <div className='skill-card' >
                ReactJS
              </div>
              <div className='skill-card' >
                .NET
              </div>
            </div>
          </div>

          <div className='see-certificates'>
            Ver Certificados (2)
          </div>
        </div>

        <div className='tech-btn'>
          <div className='tech-skills'>
            <div className='tech-icon1'><i className="bi bi-currency-bitcoin"></i></div>
            <div className='tech-icon2'><i className="bi bi-x-lg"></i></div>
            <div className='tech-icon3'><i className="bi bi-emoji-smile"></i></div>
          </div>

          <div className='contract-btn'>
            <button type="button" className="blue-btn">Contratar Profissional</button>
          </div>
        </div>

        <div className='work-exp'>
          <h2 className='h2-txt'>
            Resumo da Experiencia Profissional:
          </h2>
          <p className='p-txt'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quisquam saepe tempora rem nihil, maxime odit quis totam ea incidunt cumque placeat deserunt nobis quaerat quos porro voluptates ipsam? Libero, voluptate et, est ullam illo praesentium eum veniam temporibus totam porro sapiente rem corporis? Blanditiis sed libero inventore fuga, vero rem architecto. Velit ex inventore asperiores in sit accusantium eius facilis officiis ut at.
          </p>
          <p className='p-txt'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ut, beatae omnis dicta cupiditate sequi ullam explicabo quo deleniti minus, ipsum odio commodi est laboriosam! Non, magnam nemo omnis autem suscipit commodi minus quasi distinctio fuga inventore quod quos consectetur eaque accusamus tempora alias? Esse exercitationem, nisi in alias modi ab aperiam! Facilis eum dolorum reprehenderit aut doloribus quos repudiandae unde dolor laudantium delectus?
          </p>
        </div>
        <div className='project-area'>
          <h2 className='h2-txt'>
            Projetos em Destaque
          </h2>
          <div className='projects'>
            <div className='project-card'>
              <img className='project-img' src='https://www.scdn.co/i/_global/open-graph-default.png' alt='Wano War' />
              <div className='project-details'>
                <p className='label'>
                  Projeto 1
                </p>
                <p className='data-txt'>15 dias</p>
              </div>
            </div>
            <div className='project-card'>
              <img className='project-img' src='https://classic.exame.com/wp-content/uploads/2018/10/discord-tecnologia-vip.jpg?quality=70&strip=info&w=720' alt='Wano War' />
              <div className='project-details'>
                <p className='label'>
                  Projeto 2
                </p>
                <p className='data-txt'>500 horas</p>
              </div>
            </div>
            <div className='project-card'>
              <img className='project-img' src='https://images-na.ssl-images-amazon.com/images/I/21SEo9itttL.jpg' alt='Wano War' />
              <div className='project-details'>
                <p className='label'>
                  Projeto 3
                </p>
                <p className='data-txt'>358 horas</p>
              </div>
            </div>
          </div>
        </div>
        <div className='about-me'>
          <label className='h2-txt'>
            Sobre Mim
          </label>
          <p className='p-txt'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde optio repellendus, architecto reprehenderit soluta fugiat totam impedit maiores reiciendis itaque, commodi at amet rerum, ab a repudiandae! Hic, esse?
          </p>
        </div>
        <div className='atuation-time'>
          <label className='h2-txt'>
            Tempo de Atuação
          </label>
          <div className='work-card'>
            <div className='work-name'>
              <p className='h3-txt'>
                Projeto 1
              </p>
              <p className='h3-txt'>
                15 dias
              </p>
            </div>
            <div className='work-description'>
              <p className='p-txt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam id repellat perferendis inventore blanditiis iste praesentium aut laboriosam pariatur! Similique doloribus explicabo sit ex fuga laborum possimus quasi voluptatum ratione quia.
              </p>
            </div>
          </div>
          <div className='work-card'>
            <div className='work-name'>
              <p className='h3-txt'>
                Projeto 2
              </p>
              <p className='h3-txt'>
                500 horas
              </p>
            </div>
            <div className='work-description'>
              <p className='p-txt'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, at! Laudantium sunt quis neque modi nemo ipsam qui veniam maxime est, molestiae hic et voluptatem distinctio laborum voluptates at consequatur placeat molestias.
              </p>
            </div>
          </div>
          <div className='work-card'>
            <div className='work-name'>
              <p className='h3-txt'>
                Projeto 3
              </p>
              <p className='h3-txt'>
                358 horas
              </p>
            </div>
            <div className='work-description'>
              <p className='p-txt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus fugiat quia assumenda omnis vel doloremque cupiditate odit id fugit, similique aut et, illum culpa veritatis magnam possimus veniam aliquid ratione? Inventore.              </p>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div>
            <div className='observation-container'>
              <label className='h2-txt'>
                Observações
              </label>
              <p className='p-txt'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className='other-services'>
              <label className='h2-txt'>
                Outros Serviços
              </label>
              <div className='other-skills'>
                <div className='skill-card'>
                  Scrum
                </div>
                <div className='skill-card'>
                  Design
                </div>
              </div>
            </div>
            <div className='footer-btn'>
              <div className='contract-btn'>
                <button type="button" className="white-btn">Enviar Mensagem</button>
              </div>
              <div className='contract-btn'>
                <button type="button" className="blue-btn">Contratar Profissional</button>
              </div>
            </div>
          </div>
          <div id='projetos-lista'>
            <div className='clear-projects'>
              <label className='h2-txt'>
                Projetos
              </label>
              <div className='list-jobs'>
                <div>
                  <p className='p-txt'>Realizados:</p>
                </div>
                <div>
                  <p className='p-txt'>134</p>
                </div>
              </div>
              <div className='list-jobs'>
                <div>
                  <p className='p-txt'>Em Execução:</p>
                </div>
                <div>
                  <p className='p-txt'>1</p>
                </div>
              </div>
              <div className='list-jobs'>
                <div>
                  <p className='p-txt'>Tempo Médio (horas):</p>
                </div>
                <div>
                  <p className='p-txt'>160</p>
                </div>
              </div>
              <div className='list-jobs'>
                <div>
                  <p className='p-txt'>Não Entregues:</p>
                </div>
                <div>
                  <p className='p-txt'>1</p>
                </div>
              </div>
            </div>
            <div className='prices'>
              <label className='h2-txt'>
                Preço por hora
              </label>
              <p className='h2-num'>
                R$ 120,00
              </p>
              <p className='letras-miudas'>
                Caso o projeto não seja cobrado por hora, o valor pode sofrer aletrações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
