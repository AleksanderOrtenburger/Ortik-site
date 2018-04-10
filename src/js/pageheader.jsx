import React from 'react';
import ReactDOM from 'react-dom';





   export default class PageHeader extends React.Component {
        render() {
            return <header className="page-header">
                <div className="container">
                    <a href="/"className="page_logo">
                        <img src='./images/logo.png' alt='Zdjecie'/>
                    </a>
                    <nav className="page-nav">
                        <ul className="page-nav-list">

                            <li><a href="">Oferta</a></li>
                            <li><a href="">O firmie</a></li>
                            <li><a href="">Kontakt</a></li>
                            <li><a href="">Galeria</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        }
    }



    // ReactDOM.render(
    //     <PageHeader></PageHeader>,
    //     document.querySelector('#app')
    // );

