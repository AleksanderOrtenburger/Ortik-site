import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './pageheader.jsx';
import PageBanner from "./pagebanner.jsx";
import About from "./about.jsx";


document.addEventListener('DOMContentLoaded',() => {

    class Hello extends React.Component {
        render() {
            return <div>
                    <PageHeader/>
                    <PageBanner/>
                    <About/>

                </div>
        }
    }

    // function Hello(props){
    //     return <h1>Hello, {props.name} {props.surname}</h1>;
    // }

    ReactDOM.render(
        <div>
          <Hello/>
        </div>,
        document.querySelector('#app')
    );

});
