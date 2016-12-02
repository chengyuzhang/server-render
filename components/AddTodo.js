/**
 * Created by Nelson on 2016/11/28.
 */
import React,{ Component,PropTypes } from 'react'

export default class AddTodo extends Component{

    render(){
        return(
            <div>
                <input type="text" ref="input" />
                <button onClick={(e)=>{this.handleClick(e)}}>Add</button>
            </div>
        )
    }

    handleClick(e){
        var node=this.refs.input;
        var text=node.value.trim();

        console.log(text);
        this.props.onAddClick(text);
        node.value='';
    }
}

AddTodo.propTypes={
    onAddClick:PropTypes.func.isRequired
};