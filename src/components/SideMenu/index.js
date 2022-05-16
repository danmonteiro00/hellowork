import React, { useContext, useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo/logo.png';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

export const SideMenu = () => {
    const [inactive, setInactive] = useState(true);
    const { authenticated } = useContext(AuthContext);

    return authenticated ? (<div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div onClick={() => setInactive(!inactive)} className='logo'>
                <img src={logo} alt='Hello Work Logo' />
            </div>
            <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
                {inactive ? "" : <i className="bi bi-arrow-left-square-fill"></i>}
            </div>
        </div>

        <div className='main-menu'>
            <ul>
                <li>
                    <Link to="/home" className='menu-item'>
                        <div className='menu-icon'>
                            <i className="bi bi-house-fill"></i>
                        </div>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/work" className='menu-item'>
                        <div className='menu-icon'>
                            <i className="bi bi-code-square"></i>
                        </div>
                        <span>{`< Works! >`}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/workspace" className='menu-item'>
                        <div className='menu-icon'>
                            <i className="bi bi-person-workspace"></i>
                        </div>
                        <span>Meus Trabalhos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/chat" className='menu-item'>
                        <div className='menu-icon'>
                        <i className="bi bi-chat"></i>
                        </div>
                        <span>Chat</span>
                    </Link>
                </li>
            </ul>
        </div>

        <div className='side-menu-footer'>
            {inactive ? <a className='inactive-social-item'>
                <div onClick={() => setInactive(!inactive)} className='inactive-social-icon'>
                    <i className="bi bi-share-fill"></i>
                </div>
            </a>
                : <div className='social-midia'>
                    <ul>
                        <li>
                            <a className='social-item'>
                                <div className='social-icon'>
                                    <i className="bi bi-facebook"></i>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='social-item'>
                                <div className='social-icon'>
                                    <i className="bi bi-instagram"></i>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='social-item'>
                                <div className='social-icon'>
                                    <i className="bi bi-discord"></i>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='social-item'>
                                <div className='social-icon'>
                                    <i className="bi bi-telegram"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>}
        </div>
    </div>) : (<div />)
}