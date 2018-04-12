import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './pageheader.jsx';
import PageBanner from "./pagebanner.jsx";
import About from "./about.jsx";
import Recomendations from "./recomendations.jsx";
import Contact from "./contact.jsx"
import Footer from "./footer.jsx"
import Gallery from "./gallery.jsx"


document.addEventListener('DOMContentLoaded',() => {

    class App extends React.Component {
        render() {
            return <div>
                    <PageHeader/>
                    <Gallery/>
                    <About/>
                    <Recomendations/>
                    <PageBanner/>
                    <Contact/>
                    <Footer/>
                </div>
        }
    }

    ReactDOM.render(
        <div>
          <App/>
        </div>,
        document.querySelector('#app')
    );

});
