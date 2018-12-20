import React, { Component } from 'react';
import Authorization from '../Authorization'
import Navigation from '../Navigation';
import {Link} from "react-router-dom";

import './header.scss';

class Header extends Component{

    render(){
        return(
            <div className="cc-header">
                <Link className='cc-header__app-title' to='/analyze'>Callories Calculator</Link>
                <Navigation/>
                <Authorization/>
            </div>
        );
    }
}




export default Header;
