import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';

export default class Footer extends React.Component {
    mouseClick = (e,index) => {
        e.preventDefault();
        const randTab =[0,794,1743,2585,3457] ;
        window.scroll({
            top:randTab[index],
            behavior: 'smooth'
        });
    };
    render() {
        return <footer className="page-footer">
            <div className="container">
                <a href="/"className="page_logo">
                    <img src='./dist/images/logo.png' alt='Zdjecie'/>
                </a>
                <nav className="page-foot">
                    <ul className="page-foot-list">
                        <li><a href="" onClick={e=>this.mouseClick(e,0)}>Home</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,1)}>O firmie</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,2)}>Rekomendacje</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,3)}>Galeria</a></li>
                        <li><a href="" onClick={e=>this.mouseClick(e,4)}>Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    }
}

