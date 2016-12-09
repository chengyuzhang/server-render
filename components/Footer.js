/**
 * Created by Nelson on 2016/12/8.
 */
import React,{Component,PropTypes} from 'react';
import NavLink from './NavLink'

class Footer extends Component{
    render(){
        return(
            <ul className="tab">
                <li><NavLink to="/a">a</NavLink></li>
                <li><NavLink to="/b">b</NavLink></li>
                <li><NavLink to="/c">c</NavLink></li>
                <li><NavLink to="/d">d</NavLink></li>
                <li><NavLink to="/e">e</NavLink></li>
            </ul>
        )
    }
}

export default Footer