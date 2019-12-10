import React,{Component} from "react"
import PropTypes from 'prop-types';
export default class ListDetail extends Component{
    constructor(prop){
        super(prop)
        this.state={
            obj:prop.location.state.data
        }
    }

    static propTypes = {
        obj:PropTypes.object.isRequired
    };

    static defaultProps = {
        obj:{}
    };

    render(){
        const {name,sex} = this.state.obj;
        return(
            <div>
                <span>{name}</span><br/>
                <span>{sex}</span>
            </div>
        )
    }

}