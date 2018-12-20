import React, { Component } from 'react';

import './signInForm.scss';

class SignInForm extends Component{
    state = {
        email:'' ,
        password:''
    }
    handleInputChange(e){
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className='cc-signInForm'>
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign In</h5>
                    <input type='email'
                           id='email'
                           placeholder='Email'
                           className='cc-signInForm__input'
                           onChange={this.handleInputChange}/>
                    <input type='password'
                           id='password'
                           placeholder='Password'
                           className='cc-signInForm__input'
                           onChange={this.handleInputChange} />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
export default SignInForm;