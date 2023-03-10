import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

// https://backtheme.tech/products/wordpress/enthor/onepage-1/

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
