import React from 'react';
import './About.scss';
import {motion} from "framer-motion";
import {images} from "../../constants";

const abouts = [
    {
        title: 'Frontend Development',
        description: 'I am a web developer with a passion for creating clean and elegant websites. I have experience in ' +
            'building websites for small businesses, large corporations, and non-profit organizations.',
        imgUrl: images.about01,
    },
    {
        title: 'Frontend Development',
        description: 'I am a web developer with a passion for creating clean and elegant websites. I have experience in ' +
            'building websites for small businesses, large corporations, and non-profit organizations.',
        imgUrl: images.about02,
    },
    {
        title: 'Frontend Development',
        description: 'I am a web developer with a passion for creating clean and elegant websites. I have experience in ' +
            'building websites for small businesses, large corporations, and non-profit organizations.',
        imgUrl: images.about03,
    },
    {
        title: 'Backend Development',
        description: 'I am a backend developer with a passion for creating clean and elegant websites. I have experience in ' +
            'building websites for small businesses, large corporations, and non-profit organizations.',
        imgUrl: images.about04,

    }];


const About = () => {
    return (
        <>
            <h2 className="head-text">
                I know that
                <span> Good design</span>
                <br/>
                means
                <span> Good Business</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profiles-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title}/>
                        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>


                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About;
