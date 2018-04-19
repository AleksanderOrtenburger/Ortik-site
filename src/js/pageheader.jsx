import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';



export default class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:'flex',
            counter:0
        }
        }

       mouseClick = (e,index) => {
           e.preventDefault();
           const randTab =[0,794,1743,2585,3457] ;
           window.scroll({
               top:randTab[index],
               behavior: 'smooth'
           });
       };
    hamburgerClick = () => {
        if (this.state.counter%2===0){
            this.setState({
                display:'none',
                counter: this.state.counter +1,
            })
        } else{
            this.setState({
                display:'flex',
                counter: this.state.counter +1,
            })
        }



    };

        render() {

            return <header className="page-header">
                <div className="container">
                    <a href="/"className="page_logo">
                        <img src='./dist/images/logo.png' alt='Zdjecie' />
                    </a>

                    <nav className="page-nav">
                        <div className="header__mobile-nav-link" onClick={this.hamburgerClick}>
                            <div className="header__mobile-nav-link__line"></div>
                            <div className="header__mobile-nav-link__line"></div>
                            <div className="header__mobile-nav-link__line"></div>
                        </div>
                        <ul className="page-nav-list" style={{display:this.state.display}}>

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

