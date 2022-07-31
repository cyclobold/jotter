import { Component } from "react"
import Greeting from "../Greeting/Greeting";

class Timer extends Component{

    constructor(props){
        super()

        this.props = props;
        
    }

    render(){

        return (
            <div>
                This is afternoon {this.props.children}
                <Greeting />
            </div>
        )
        
    }




}

export default Timer