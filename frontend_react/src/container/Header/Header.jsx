import React from 'react';
import './Header.scss';
import {motion} from "framer-motion";
import {images} from "../../constants";

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="app__header-info"
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>✌🏻</span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Artem</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Full stack</p>
                    </div>

                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1, delayChildren: 1, ease: "easeInOut"}}
                className="app__header-img">

                <img src={images.profile_first} alt="profile_bg"/>

            </motion.div>
            <motion.div

            >


            </motion.div>
        </div>
    );
};

export default Header;
