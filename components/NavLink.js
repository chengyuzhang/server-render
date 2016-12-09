/**
 * Created by Nelson on 2016/12/8.
 */
import React,{PropTypes,Component} from 'react'
import {Link} from 'react-router'

class NavLink extends Component{
    render(){
        return(
            <Link {...this.props} />
        )
    }
}

export default NavLink