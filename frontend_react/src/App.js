import React from 'react';
import {About, Footer, Header, Skills, Testimonials, Work} from "./container";
import './App.scss';
import {NavBar} from "./components";

const App = () => {
    return (
        <div className="app">
            <NavBar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default App;
