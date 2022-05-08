import React, {useState} from 'react';
import './NavBar.scss';
import {images} from "../../constants";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        //classic navbar
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
            {/*mobile navbar*/}
            <div className="app__navBar_menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>
                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};


export default NavBar;
