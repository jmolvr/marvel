import React from 'react';
import './index.css';


export default function Header({children}) {
    return(
        <header className="menu-bg">
            <div className="menu">
                <div className="menu-logo" >
                    <a href="/">MARVEL</a>
                </div>
                {children}
            </div>
        </header>
    );
}