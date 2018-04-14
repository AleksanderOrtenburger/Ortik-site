import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';






export default class PageHeader extends React.Component {
       mouseClick = (e,index) => {
           e.preventDefault();
           const randTab =[0,794,1743,2585,3457] ;
           window.scroll({
               top:randTab[index],
               behavior: 'smooth'
           });
       };

        render() {

            return <header className="page-header">
                <div className="container">
                    <a href="/"className="page_logo">
                        <img src='./dist/images/logo.png' alt='Zdjecie'/>
                    </a>
                    <nav className="page-nav">
                        <ul className="page-nav-list">

                            <li><a href="" onClick={e=>this.mouseClick(e,0)}>Home</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,1)}>O firmie</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,2)}>Rekomendacje</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,3)}>Galeria</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,4)}>Kontakt</a></li>
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

