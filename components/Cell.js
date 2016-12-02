/**
 * Created by Nelson on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'

export default class Cell extends Component{
    render(){
        return(
            <li>{this.props.content}</li>
        )
    }
}