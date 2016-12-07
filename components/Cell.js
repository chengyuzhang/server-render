/**
 * Created by Nelson on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react'

export default class Cell extends Component{
    render(){
        return(
            <li>
                <img className="show-img" src={this.props.content.hostGragp} alt={this.props.content.goodName}/>
                <span>{this.props.content.goodName}</span>
            </li>
        )
    }
}