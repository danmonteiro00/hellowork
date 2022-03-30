import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo/logo.png';

export const SideMenu = () => {
    const [inactive, setInactive] = useState(false);

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
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-house-fill"></i>
                            </div>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                            <i class="bi bi-code-square"></i>
                            </div>
                            <span>{`< Works! >`}</span>
                        </a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                            <i class="bi bi-person-workspace"></i>
                            </div>
                            <span>Meus Trabalhos</span>
                        </a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                            <i class="bi bi-chat-dots-fill"></i>
                            </div>
                            <span>Chat</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}