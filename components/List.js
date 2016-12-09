/**
 * Created by Nelson on 2016/11/29.
 */
import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import {getData} from '../actions/actions';

class List extends Component{

    render(){

        if(this.props.list.isFetching){
            return(
                <ul>aaa</ul>
            )
        }

        return(
            <ul>
                {this.props.list.items.map((item,index)=>
                    <Cell content={item} key={index} />
                )}
            </ul>
        )
    }

    componentWillMount(){
        console.log('我是渲染前的输出!');
    }

    componentDidMount(){
        console.log('我是渲染后的输出!');
        //this.props.dispatch(getData({}));//这一句代码如果用npm run dev时要打开(仅此测试用时需要,其他根据业务自己来判断)
    }
}

function list(state){
    return {
        list:state.getList
    }
}

export default connect(list)(List);



