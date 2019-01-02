import React, { Component } from 'react';
import firebase from '../../../firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signingUp} from "../../../actions/action_signingUp";  // importing action creator
import '../forms.scss';

class SignUpForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            nickname: '',
            email:'' ,
            password:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.callme = this.callme.bind(this);
    }

    handleInputChange(e){
          this.setState({
              [e.target.id] : e.target.value
          });
          console.log(this.state);
    }

    callme(){
        console.log('its working')
    }

    handleSubmit(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error)=>{
                alert(error.message);
                console.log(error.message);
                console.log(error.code);
            });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
               console.log('ne debil a kica');
            } else {
                console.log('debil');
            }
        });
    }

    render() {
        return (
            <div className='cc-authForm'>
                <form className='cc-authForm__form' onSubmit={this.handleSubmit}>
                    <h5 className='cc-authForm__title'>Sign Up</h5>
                    <input type='text'
                           id='nickname'
                           placeholder='Nickname'
                           className='cc-authForm__input'
                           value={this.state.nickname}
                           onChange={this.handleInputChange}/>
                    <input type='email'
                           id='email'
                           placeholder='Email'
                           className='cc-authForm__input'
                           value={this.state.email}
                           onChange={this.handleInputChange}/>
                    <input type='password'
                           id='password'
                           placeholder='Password'
                           className='cc-authForm__input'
                           value={this.state.password}
                           onChange={this.handleInputChange}/>
                    <input type="submit" className='cc-authForm__input--submit-btn' value='Sign up'/>
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
    return bindActionCreators({signingUp: signingUp}, dispatch)
}

export default connect(mapStateToProps , matchDispatchToProps)(SignUpForm);