/**
 * Created by Nelson on 2016/11/28.
 */
import { combineReducers } from 'redux';
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER, VisibilityFilters,REQUEST,REQUEST_SUCCESS,REQUEST_ERROR} from '../actions/actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: !state[action.index].completed
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

function getList(state={
    isFetching: true,
    didInvalidate: false
},action){
    switch(action.type){
        case REQUEST:
            return state;
        case REQUEST_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    isFetching: false,
                    didInvalidate: false,
                    items:action.data.goodsIndexList}
            );
        case REQUEST_ERROR:
            return Object.assign(
                {
                    isFetching:true,
                    didInvalidate: true}
            );
        default:
            return state;
    }
}

const todoApp=combineReducers({
    visibilityFilter,
    todos,
    getList
});

export default todoApp;