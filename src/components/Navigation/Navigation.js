import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render() {
        return (
            <nav className='cc-navigation'>
                <ul className='cc-navigation__list'>
                    <li className='cc-navigation__item'><Link className='cc-navigation__link' to='/analyze'>Analyze Food</Link></li>
                    <li className='cc-navigation__item'><Link className='cc-navigation__link' to='/statistic'>Statistic</Link></li>
                    <li className='cc-navigation__item'><Link className='cc-navigation__link' to='/about'>About</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;