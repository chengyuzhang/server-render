/**
 * Created by Nelson on 2016/11/28.
 */
import request from 'superagent';
const charset = require('superagent-charset');
charset(request);

export const ADD_TODO='ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const REQUEST='REQUEST';
export const REQUEST_SUCCESS='REQUEST_SUCCESS';
export const REQUEST_ERROR='REQUEST_ERROR';
export const GET_DATA='GET_DATA';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text){
    return {type:ADD_TODO, text}
}
export function completeTodo(index){
    return {type:COMPLETE_TODO, index}
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}


export function requestData(data){
    return{type:REQUEST,data}
}
export function requestSuccess(data){
    return{type:REQUEST_SUCCESS,data}
}
export function requestError(e){
    return{type:REQUEST_ERROR,e}
}
export function getData(data){
    var postData = {
        "head":{
            "messageID":123456,
            "timeStamp": 123,
            "transactionType":"index",
            "tab":"1"
        },
        "body":{
            "page": 1,
            "operation": 0
        }
    };

    return (dispatch)=>{
        //dispatch(requestData({}));

        return new Promise((resolve)=>{
            request.post('http://192.168.4.93:8081/jr-apisys/api/main')
            .set('Content-Type','application/x-www-form-urlencoded')
            .charset('gbk')
            .send({msg: JSON.stringify(postData)})
            .end((err, res)=>{
                if (err || !res.ok) {
                    console.log('Oh no! error');
                } else {
                    var body = JSON.parse(res.text).body;
                    dispatch(requestSuccess(body));
                    resolve(body);
                }
            });
        });
    }
}
