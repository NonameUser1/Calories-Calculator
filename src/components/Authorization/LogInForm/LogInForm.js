import React, { Component } from 'react';
import '../forms.scss';


class LogInForm extends Component{
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
export default LogInForm;