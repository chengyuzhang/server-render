/**
 * Created by Nelson on 2016/11/28.
 */
import React, { PropTypes, Component } from 'react';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state={value:'Hello React!'}
    }

    handleChange(e){
        this.setState({
            value:e.target.value
        });
    }

    render(){
        return(
            <div>
                <input type="text" ref="input" onChange={this.handleChange.bind(this)} />
                <p>{this.state.value}</p>
            </div>
        )
    }
}