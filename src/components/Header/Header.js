import React, { Component } from 'react';
import './header.scss';
import Authorization from '../Authorization'
import Navigation from '../Navigation';

class Header extends Component{

    render(){
        return(
            <div className="cc-header">
                <div className="cc-header__app-title">boiiiiiiiii</div>
                <Navigation/>
                <Authorization/>
            </div>
        );
    }
}




export default Header;
