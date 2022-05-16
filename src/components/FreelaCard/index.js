import React, { useEffect, useState } from 'react';
import "./styles.css";

export const FreelaCard = () => {
    const [freelancer, setFreelancer] = useState([
        {
            id: 0,
            avatar: "https://i.pinimg.com/564x/0b/3d/f1/0b3df19a63dfe264cfd984f6864a77b3.jpg",
            nome: "Monkey D. Luffy",
            funcao: "Capitão dos Piratas do Chapéu de Palha",
            nota: "5.0",
            numeroAvaliacoes: "(1000 Avaliações)",
            mainSkills: [
                {
                    id: 0,
                    nome: "Gomu Gomu no Mi"
                },
                {
                    id: 1,
                    nome: "Haki do Rei"
                },
                {
                    id: 2,
                    nome: "Comer Carne"
                }
            ]
        },
    ])

    useEffect = (() => {
        setFreelancer();
    }, [])

    return freelancer.map((freelancer) =>
        <div className='person-card'>
            <div className='personal-infos'>
                <div>
                    <img className='work-avatar' src={freelancer.avatar} alt='Luffão' />
                </div>

                <div className='person-info'>
                    <h4 className='person-name'>{freelancer.nome}</h4>
                    <p className='person-role'>{freelancer.funcao}</p>
                    <div className='star-div'>
                        <i className="bi bi-star-fill star-icon"></i>
                        <i className="bi bi-star-fill star-icon"></i>
                        <i className="bi bi-star-fill star-icon"></i>
                        <i className="bi bi-star-fill star-icon"></i>
                        <i className="bi bi-star-fill star-icon"></i>
                        <p className='rank-info'>{freelancer.nota} {freelancer.numeroAvaliacoes}</p>
                    </div>

                    <label className='label-skills'>
                        Principais Habilidades
                    </label>

                    <div className='main-skills'>
                        {freelancer.mainSkills.map((mainSkills, i) =>
                            <div className='skill-card' key={i}>
                                {mainSkills.nome}
                            </div>
                        )}
                    </div>
                </div>

                <div className='see-certificates'>
                    Ver Certificados (0)
                </div>
            </div>

            <div className='tech-btn'>
                <div className='tech-skills'>
                    <div className='tech-icon1'><i class="bi bi-currency-bitcoin"></i></div>
                    <div className='tech-icon2'><i class="bi bi-x-lg"></i></div>
                    <div className='tech-icon3'><i class="bi bi-emoji-smile"></i></div>
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
                    Monkey D. Luffy, also known as "Straw Hat" Luffy and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger. He believes that being the Pirate King means having the most freedom in the world.
                </p>
                <p className='p-txt'>
                    Having had a bounty of <i class="bi bi-currency-bitcoin"></i>300,000,000 before he arrived at the Sabaody Archipelago, Luffy was one of eleven "Super Rookies", pirates who simultaneously reached the Red Line with bounties of over <i class="bi bi-currency-bitcoin"></i>100,000,000 shortly before the Summit War. He, the other ten Super Rookies, and Marshall D. Teach would go on to be referred to as the "Worst Generation". Eventually, his conquests and his reputation end up contributing to his current bounty of <i class="bi bi-currency-bitcoin"></i>1,500,000,000.
                </p>
            </div>

            <div className='project-area'>
                <h2 className='h2-txt'>
                    Projetos em Destaque
                </h2>
                <div className='projects'>
                    <div className='project-card'>
                        <img className='project-img' src='https://i.pinimg.com/564x/d1/8a/c9/d18ac98c144be04289d33bf0dd0ca3f4.jpg' alt='Wano War' />
                        <div className='project-details'>
                            <p className='label'>
                                Arco de Wano
                            </p>
                            <p className='data-txt'>Lançado em 2018</p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img className='project-img' src='https://i.pinimg.com/564x/d8/ec/c0/d8ecc0b509ad4140331aa3a99cf0a181.jpg' alt='Wano War' />
                        <div className='project-details'>
                            <p className='label'>
                                Marineford
                            </p>
                            <p className='data-txt'>Lançado em 2009-2010</p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img className='project-img' src='https://i.pinimg.com/564x/6b/d6/d2/6bd6d237958984cc57043e66b2158772.jpg' alt='Wano War' />
                        <div className='project-details'>
                            <p className='label'>
                                Ennies Lobby
                            </p>
                            <p className='data-txt'>Lançado em 2005-2006</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='about-me'>
                <label className='h2-txt'>
                    Sobre Mim
                </label>
                <p className='p-txt'>
                    Eu sou Monkey D. Luffy, o homem que vai se tornar o Rei dos Piratas!!
                </p>
            </div>

            <div className='atuation-time'>
                <label className='h2-txt'>
                    Tempo de Atuação
                </label>
                <div className='work-card'>
                    <div className='work-name'>
                        <p className='h3-txt'>
                            Socar o Buggy
                        </p>
                        <p className='h3-txt'>
                            1 Dia
                        </p>
                    </div>
                    <div className='work-description'>
                        <p className='p-txt'>
                            O Arco Orange Town também conhecido como Arco do Buggy, o palhaço, é o segundo arco da história da Saga East Blue do mangá e anime: One Piece. O arco mostra Monkey D. Luffy , Roronoa Zoro involuntariamente cruzando o caminho de Buggy lutando com ele, e sua tripulação, também para conseguir ajuda de sua futura navegadora, Nami.
                        </p>
                    </div>
                </div>

                <div className='work-card'>
                    <div className='work-name'>
                        <p className='h3-txt'>
                            Socar o Kuro
                        </p>
                        <p className='h3-txt'>
                            1 Dia
                        </p>
                    </div>
                    <div className='work-description'>
                        <p className='p-txt'>
                            O Arco Vila Syrup, é o terceiro arco da história na Saga East Blue do mangá e anime One Piece. Monkey D. Luffy,Roronoa Zoro, e Nami chegam a Vila Syrup à procura de um navio, onde se encontram com Usopp, um mentiroso local da aldeia. Depois de aprender do passado de Usopp e o motivo de suas mentiras, eles decidem que eles não têm escolha, mas para ajudá-lo a derrotar o Capitão Kuro, a fim de salvar sua amiga, Kaya.
                        </p>
                    </div>
                </div>

                <div className='work-card'>
                    <div className='work-name'>
                        <p className='h3-txt'>
                            Socar o Don Krieg
                        </p>
                        <p className='h3-txt'>
                            1 Dia
                        </p>
                    </div>
                    <div className='work-description'>
                        <p className='p-txt'>
                            O Arco Baratie é o o quarto arco da história na Saga East Blue do mangá e anime One Piece. Os Chapéus de Palha se encontram Johnny e Yosaku, que lhes levam ao restaurante navio chamado Baratie, uma espécie de "oásis flutuante" no meio do oceano onde eles se encontram com Sanji. No entanto, um almirante pirata chamado Don Krieg lança seu olhar sobre o Baratie como um substituto para a sua frota devastado, e o restaurante logo vem sob cerco.
                        </p>
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
                                Gomu Gomu no Mi
                            </div>
                            <div className='skill-card'>
                                Haki do Rei
                            </div>
                            <div className='skill-card'>
                                Comer Carne
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
                                <p className='p-txt'>Muitas</p>
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

    )
}