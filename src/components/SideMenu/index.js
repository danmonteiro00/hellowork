import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo/logo.png';

import { Link } from 'react-router-dom';

export const SideMenu = () => {
    const [inactive, setInactive] = useState(true);

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className='top-section'>
                <div onClick={() => setInactive(!inactive)} className='logo'>
                    <img src={logo} alt='Hello Work Logo' />
                </div>
                <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
                    {inactive ? "" : <i class="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className='search-controller'>
                <button className='search-btn'>
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder='Pesquisar' />
            </div>
            <div className='divider'></div>

            <div className='main-menu'>
                <ul>
                    <li>
                        <Link to="/home" className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-house-fill"></i>
                            </div>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/work" className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-code-square"></i>
                            </div>
                            <span>{`< Works! >`}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/workspace" className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-person-workspace"></i>
                            </div>
                            <span>Meus Trabalhos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat" className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-chat-dots-fill"></i>
                            </div>
                            <span>Chat</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='side-menu-footer'>
                {inactive ? <a className='inactive-social-item'>
                    <div onClick={() => setInactive(!inactive)} className='inactive-social-icon'>
                        <i class="bi bi-share-fill"></i>
                    </div>
                </a>
                    : <div className='social-midia'>
                        <ul>
                            <li>
                                <a className='social-item'>
                                    <div className='social-icon'>
                                        <i class="bi bi-facebook"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='social-item'>
                                    <div className='social-icon'>
                                        <i class="bi bi-instagram"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='social-item'>
                                    <div className='social-icon'>
                                        <i class="bi bi-discord"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className='social-item'>
                                    <div className='social-icon'>
                                        <i class="bi bi-telegram"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}