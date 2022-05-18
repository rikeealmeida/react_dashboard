import React, {useState} from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.jpeg';
import cn from 'classnames';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id='sidebar'>
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Escola Acompanhar</h1>
                </div>

                <i
                onClick={() => closeSidebar()}
                className=" fa fa-times "
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link ">
                    
                    <a href="#">
                    <i className="fa fa-home"></i>Início
                    </a>
                </div>  
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-graduation-cap"></i>Alunos
                    <span className="fa fa-caret-down first"></span>
                    </a>
                    
                    <ul>
                    <li><a href='#'>Pages</a></li>
                    </ul>

                </div>
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-chalkboard-teacher"></i>Professores
                    <span className="fa fa-caret-down second"></span>
                    </a>

                    <ul>
                    <li><a href='#'>Pages</a></li>
                    </ul>

                </div>
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-mail-bulk"></i>Secretaria
                    <span className="fa fa-caret-down third"></span>
                    </a>

                    <ul>
                    <li><a href='#'>Pages</a></li>
                    </ul>

                </div>
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-users"></i>Turmas
                    <span className="fa fa-caret-down fourth"></span>
                    </a>

                    <ul>                        
                        <li>
                        <a href='#'>
                        <i className="fa fa-archive"></i>Pages</a>
                        </li>
                    </ul>

                </div>
                <div>
                    <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-check"></i>Frequência</a>
                </div>
                </div>
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-dollar-sign"></i>Financeiro</a>
                </div>
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-area-chart"></i>Relatórios
                    <span className="fa fa-caret-down"></span>
                    </a>

                    <ul>
                    <li><a href='#'>Pages</a></li>
                    </ul>

                </div>
                <div className="sidebar__link">
                    
                    <a href="#">
                    <i className="fa fa-bars"></i>Cadastros
                    <span className="fa fa-caret-down fifth"></span>
                    </a>

                    <ul>
                    <li><a href='#'>Pages</a></li>
                    </ul>

                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>        
    )       
}


export default Sidebar;
