/**
 * Created by Nelson on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import {getData} from '../actions/actions';

class List extends Component{

    render(){

        if(this.props.getList.isFetching){
            return(
                <ul>aaa</ul>
            )
        }

        return(
            <ul>
                {this.props.getList.items.map((item,index)=>
                    <Cell content={item} key={index} />
                )}
            </ul>
        )
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



