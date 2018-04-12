import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';

export default class Footer extends React.Component {
    mouseClick = (e,index) => {
        e.preventDefault();
        const randTab =[794,1430,0,2349] ;
        window.scroll({
            top:randTab[index],
            behavior: 'smooth'
        });
    };
    render() {
        return <footer className="page-footer">
            <div className="container">
                <a href="/"className="page_logo">
                    <img src='./images/logo.png' alt='Zdjecie'/>
                </a>
                <nav className="page-nav">
                    <ul className="page-nav-list">
                        <li><a href="" onClick={e=>this.mouseClick(e,0)}>Oferta</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,1)}>O firmie</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,2)}>Kontakt</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,3)}>Galeria</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    }
}

