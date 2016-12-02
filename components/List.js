/**
 * Created by Nelson on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import {getData} from '../actions/actions';

class List extends Component{

    render(){
        return(
            <ul>
                {this.props.list.map((item,index)=>
                    <Cell content={item.goodName} key={index} />
                )}
            </ul>
        )
    }

    componentWillMount(){
        console.log('我是渲染前的输出!');

    }

    componentDidMount(){
        console.log('我是渲染后的输出!');
        this.props.dispatch(getData({}));
    }
}

function list(state){
    return state;
}

export default connect(list)(List);


//{this.props.list.items[0].goodDesc}

//{this.props.list.map((item,index)=>
//    <Cell content={item.goodName} key={index} />
//)}

