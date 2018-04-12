import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';






export default class PageHeader extends React.Component {
       constructor(props){
           super(props);
           this.state = {
               scroll1:794,
               scroll2:1430,
               scroll3:2349,
               scroll4:0

           }
       }
       mouseClick = (e,index) => {
           e.preventDefault();
           const randTab =[794,1430,0,2349] ;
           window.scroll({
               top:randTab[index],
               behavior: 'smooth'
           });
       };

        render() {

            return <header className="page-header">
                <div className="container">
                    <a href="/"className="page_logo">
                        <img src='./images/logo.png' alt='Zdjecie'/>
                    </a>
                    <nav className="page-nav">
                        <ul className="page-nav-list">

                            <li><a href="" onClick={e=>this.mouseClick(e,0)}>O firmie</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,1)}>Rekomendacje</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,2)}>Galeria</a></li>
                            <li><a href="" onClick={e=>this.mouseClick(e,3)}>Kontakt</a></li>
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

