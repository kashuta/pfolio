import React from 'react';
import './NavBar.scss';
import {images} from "../../constants";

const NavBar = () => {
    return (
        <nav className="app__navBar">
            <div className="app__navBar_logo">
                <img src={images.logo} alt='logo'/>
            </div>
            <ul className="app__navBar_links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default NavBar;
