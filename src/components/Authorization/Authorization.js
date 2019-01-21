import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logOut} from '../../actions/action_logOut';
import {onLoadUserCheck} from '../../actions/action_onLoadUserCheck';
import firebase from '../../firebase';

import './authorization.scss';

class Authorization extends Component{
    constructor(props){
        console.log('running constructor');
        super(props);
        console.log('Auth status -from store');
        console.log(this.props.auth);

        this.logOutUser = this.logOutUser.bind(this);
        this.userDataToStore = this.userDataToStore.bind(this);
    }

    userDataToStore = () =>{
        console.log('call method inside firebase obj');
        this.props.logout();
    }


    logOutUser(){
        firebase.auth().signOut().then(()=> {
            console.log('logout successful');
            this.userDataToStore.call(Authorization);
        }).catch(function(error) {
            alert(`${error.code}   ${error.message}`);
        });

    }



    render() {

        console.log('running render');

        return (
            <div className='cc-header__authorization cc-authorization'>
                {  this.props.auth.authorized ?

                        <button className='cc-authorization__logOut' onClick={this.logOutUser}>Log out</button>
                    :

                        <div className='cc-authorization__link-container'>
                            <Redirect to='/signUp'/>
                            <Link className='cc-authorization__link' to='/signUp'>Sign up</Link>
                            <Link className='cc-authorization__link' to='/logIn'>Log in</Link>
                        </div>

                }
            </div>
        );
    }
}




function mapStateToProps(state){         // passing state from store to props of component
    console.log('passing state to props')
    return{
        auth: state.auth
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({logout: logOut , userCheck: onLoadUserCheck} , dispatch)
}

export default connect(mapStateToProps , matchDispatchToProps)(Authorization);