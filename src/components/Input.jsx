import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            name:prop.name
        };
        this._inputChange = this._inputChange.bind(this);
        this.inputRef = React.createRef();
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        getChangeName:PropTypes.func.isRequired
    };
    _inputChange(e){
        this.setState({
            name:e.target.value
        });
        this.props.getChangeName(e.target.value);
    };

    _inputChange1(e){
        this.setState({
            name:this.inputRef.current.value
        });
        this.props.getChangeName(this.inputRef.current.value);
    };
    static defaultProps = {
        name:"test"
    };

    _NameLength(){
        const {name} = this.state;
        if(name.length>5){
            return "太长了"
        }
        return "刚刚好";
    }

    render() {
        const {name} = this.state;
        return (
            <div>
                <input type='text' value={name} onChange={this._inputChange}/>
                <input type='text' value={name} ref={this.inputRef} onChange={()=>{this._inputChange1()}}/>
                <div>{this._NameLength() }</div>
            </div>
        )
    }
}