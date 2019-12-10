import React,{Component} from 'react'

import {Link} from "react-router-dom";
import Input from "./Input";

class Home extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            name:"123"
        }
    }

    _getChangeName = (val:number) => {
        this.setState({
            name: val
        })
    };

    render() {
        return(
            <div>
                <Link to="/list">to list {this.state.name}</Link>
                <Input name={this.state.name} getChangeName={this._getChangeName}/>
            </div>
        )
    }
}

export default Home;