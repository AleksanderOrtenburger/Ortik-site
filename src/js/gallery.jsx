import React from "react";

export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display:'block',
            display2:'none',
            display3:'none',
            counter:0
        }
    }


    handleEnter = () => {
        event.preventDefault();
        if(this.state.counter===0){
            this.setState({
                counter:this.state.counter+1,
                display:'none',
                display2:'block',
                display3:'none'

            })
        }
        if(this.state.counter===1){
            this.setState({
                counter:this.state.counter+1,
                display:'none',
                display2:'none',
                display3:'block',

            })
        }
        if(this.state.counter===2){
            this.setState({
                counter:0,
                display:'block',
                display2:'none',
                display3:'none',

            })
        }




    };


    handleLeave = ()=>{
        event.preventDefault();

        if(this.state.counter===0){
            this.setState({
                counter:2,
                display:'none',
                display2:'none',
                display3:'block'

            })
        }
        if(this.state.counter===1){
            this.setState({
                counter:this.state.counter-1,
                display:'block',
                display2:'none',
                display3:'none',

            })
        }
        if(this.state.counter===2){
            this.setState({
                counter:this.state.counter-1,
                display:'none',
                display2:'block',
                display3:'none',

            })
        }
    };
    render() {
        return<section className='mainbanner'>
            <div className="container">
                <div id="arrow-left" className="arrow" onClick={this.handleLeave}></div>
                <div id="slider">
                    <div className="slide slide1" style={{display:this.state.display}}>

                    </div>
                    <div className="slide slide2" style={{display:this.state.display2}}>

                    </div>
                    <div className="slide slide3" style={{display:this.state.display3}}>

                    </div>
                </div>
                <div id="arrow-right" className="arrow" onClick={this.handleEnter} ></div>
            </div>
        </section>

    }
}