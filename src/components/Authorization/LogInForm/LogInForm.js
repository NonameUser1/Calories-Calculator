import React, { Component } from 'react';
import firebase from '../../../firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logIn} from "../../../actions/action_logIn";  // importing action creator

import '../forms.scss';


class LogInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'' ,
            password:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function(error) {
                alert(error.code);
                alert(error.message);
            });
    }
    render() {
        return (
            <div className='cc-authForm'>
                <form className='cc-authForm__form' onSubmit={this.handleSubmit}>
                    <h5 className='cc-authForm__title'>Log In</h5>
                    <input type='email'
                           id='email'
                           placeholder='Email'
                           className='cc-authForm__input'
                           onChange={this.handleInputChange}/>
                    <input type='password'
                           id='password'
                           placeholder='Password'
                           className='cc-authForm__input'
                           onChange={this.handleInputChange} />
                    <input className='cc-authForm__input--submit-btn' type="submit" value='Log in'/>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {         // passing state from store to props of component
    console.log('passing state to props');
    return{
        auth: state.auth
    }
}

const matchDispatchToProps = dispatch => {  // passing action to props?
    return bindActionCreators({login: logIn}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LogInForm);