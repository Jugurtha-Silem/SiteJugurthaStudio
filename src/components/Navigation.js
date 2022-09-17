import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <header>
                <div className="title">
                    <h1>Formations mao gratuites</h1>
                </div>
                <nav className='navigation-pages'>
                    <div className='logo'>
                        <a></a>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/"> Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tutoriel" >Pro tools</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >Logic Pro</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nousSetenir" >Nous setenir</NavLink>
                        </li>
                    </ul>
                    <form>
                        <label htmlFor="">Serche</label>
                        <input type="serche"  placeholder='recherche'/>
                    </form>
                </nav>
            </header>
        </>
    );
};

export default Navigation;