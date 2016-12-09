/**
 * Created by Nelson on 2016/11/28.
 */
import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/actions';
import Input from '../components/Input';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Control from '../components/Control';
import Footer from '../components/Footer';

class App extends Component{

    render(){
        const {dispatch,visibleTodos,visibilityFilter,list} =this.props;

        return(
            <div className="wrap">
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

function select(state,props) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter

    }
}

export default connect(select)(App);