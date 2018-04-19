import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            class1:'',
            class2:'',
            class3:'',
            class4:'',
        }
    }
    aboutScroll = ()=>{
        if(window.scrollY >790 && window.scrollY <1400){
            this.setState({
                class1:'aboutUsCntText-1',
                class2:'aboutUsCntText-2',
                class3:'aboutUsCntText-3',
                class4:'aboutUsCntText-4',

            })
        }
        if(window.scrollY>1498 ||window.scrollY<400){
            this.setState({
                class1:'',
                class2:'',
                class3:'',
                class4:'',

            })
        }


    };
    render() {

        return <section className="aboutUs" >
            <div className="container aboutUsContainer">
                <div className="aboutUsTitle"><span>O nas</span></div>
                <div className="aboutUsCnt">
                    <div className="aboutUsCntEm"> &nbsp;</div>
                    <div className="aboutUsCntText">

                            <span className={this.state.class1}> Misją naszej firmy jest pomaganie klientom w tworzeniu ergonomicznego środowiska pracy, sprzyjającego zdrowiu i wydajności. Klientowi proponujemy optymalne rozwiązania, najlepiej zaspakajające jego potrzeby.  Za nadrzędny cel uważamy satysfakcję inwestora. We współpracy zarówno z dostawcami, jak i klientami stawiamy na wieloletnie partnerstwo.</span>

                          <span className={this.state.class2}>ORTIK  zapewnia sprawną obsługę, dobrą logistykę i szybki oraz sprawny serwis techniczny. Pracownicy o wysokich kwalifikacjach gwarantują profesjonalizm i wysoką jakość obsługi.Staramy się działać elastycznie i dostosowywać ofertę do zmiennych oczekiwań rynku.  Nasz zespół posiada wieloletnie doświadczenie w obsłudze dużych inwestycji oraz współpracy ze znanymi pracowniami architektonicznymi.</span>

                           <span className={this.state.class3}>Staramy się działać elastycznie i dostosowywać ofertę do zmiennych oczekiwań rynku.  Nasz zespół posiada wieloletnie doświadczenie w obsłudze dużych inwestycji oraz współpracy ze znanymi pracowniami architektonicznymi.Dzięki dużemu doświadczeniu oraz  wysokiej kulturze organizacyjnej jesteśmy w stanie sprostać stale rosnącym wymaganiom naszych klientów.</span>

                           <span className={this.state.class4}>Naszą dewizą jest że nie ma rzeczy niemożliwych.Realizujemy projekty nietypowe ,łączące różne techniki wykonania i materiały takie jak drewno, płytę , szkło ,metal ,laminaty i tkaniny.Staramy się sprostać najbardziej skomplikowane projekty naszych klientów.</span>
                    </div>
                    <div className="aboutUsCntFoto">

                    </div>
                </div>
            </div>
        </section>
    }
}
