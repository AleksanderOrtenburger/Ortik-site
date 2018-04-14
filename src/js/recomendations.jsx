import React from 'react';
import ReactDOM from 'react-dom';





export default class Recomendations extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display1:'none',
            display2:'none',
            display3:'none',
            display4:'none'

        }
    }
    // mouseEnter = (e,index) => {
    //     event.preventDefault();
    //     let object = {};
    //     object['display'+index] = 'block';
    //     this.setState(object)
    // };
    // mouseLeave = (e,index) => {
    //     event.preventDefault();
    //     let object = {};
    //     object['display'+index] = 'none';
    //     this.setState(object)
    // };
    render() {
        return <section className='recomendation'>
                <div className='container'>
                    <div className='recomendation-main'>
                <div className="recomendation-title">ZAUFALI NAM</div>
                <div className='recomendation-content'>
                    <div className='recomendation-content-logo'>
                        <div className='recomendation-content-logo1'>

                        </div>
                        <div className='recomendation-content-logo2'>

                        </div>
                        <div className='recomendation-content-logo3'>


                        </div>
                        <div className='recomendation-content-logo4'>


                        </div>
                    </div>
                    <div className='recomendation-content-text' >
                        <div className="recomendation-content-text1" ><br/><span >DEALER MERCEDES BENZ ZESZUTA RADOM</span>
                            <ul className="recomendation-content-text-list" >
                                <li>WYPOSAŻENIE SALONU</li>
                                <li>MEBLE DO ZABUDOWY POJAZDÓW SPECJALISTYCZNYCH</li>
                            </ul>
                        </div>
                        <div className="recomendation-content-text2"  ><span >TREND GLASS</span>
                            <ul className="recomendation-content-text-list" >
                                <li>WYPOSAŻENIE BIUR I GABINETÓW RECEPCJI</li>
                                <li>MEBLE DO LABOLATORIÓW I SAL PRODUKCYJNYCH</li>
                            </ul>
                        </div>
                        <div className="recomendation-content-text3"  ><span>ITM POLAND</span>
                            <ul className="recomendation-content-text-list" >
                                <li>MEBLE BIUROWE</li>
                                <li>ZABUDOWY SPECJALISTYCZNE</li>
                            </ul>
                        </div>
                        <div className="recomendation-content-text4"  ><span>LEROY MERLIN POLSKA</span>
                            <ul className="recomendation-content-text-list" >
                                <li>WYPOSAŻENIA MARKETÓW</li>
                                <li>MEBLE BIUROWE, SOCJALNE I MAGAZYNOWE</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    </div>
            </div>
        </section>
    }
}