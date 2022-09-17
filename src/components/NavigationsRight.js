import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationsRight = () => {
    return (
        <>
        <nav className='nav-right'>
            <ul>
                <li>
                    <NavLink>Chapitre-1</NavLink>
                </li>
                <li>
                    <NavLink>Chapitre-2</NavLink>
                </li>
                <li>
                    <NavLink>Chapitre-3</NavLink>
                    
                </li>
                <li>
                    <NavLink>Chapitre-2</NavLink>
                </li>
            </ul>
        </nav>
            
        </>
    );
};

export default NavigationsRight;