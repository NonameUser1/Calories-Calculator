import React, { Component } from 'react';
import { Switch, Route , Redirect , withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import GetNutrientsInfo from '../GetNutrientsInfo';
import About from '../About';
import Statistic from '../Statistic';
import LogInForm from '../Authorization/LogInForm';
import SignUpForm from '../Authorization/SignUpForm';


class Router extends Component{

    render(){
        return(
            <main className='cc-main'>
                <Switch>
                    <Route path='/analyze'          component={GetNutrientsInfo}/>
                    <PrivateRoute path='/statistic' component={Statistic} isAuthenticated={this.props.isAuthenticated}/>
                    <Route path='/about'            component={About}/>
                    <Route path='/logIn'            component={LogInForm}/>
                    <Route path='/signUp'           component={SignUpForm}/>
                </Switch>
            </main>
        )
    }
}

class PrivateRoute extends Router { //high order component

    render(){
        const  component = this.props.component;
        console.log(` higher order component: this.props.isAuthenticated = ${this.props.isAuthenticated}`);
        return this.props.isAuthenticated
                ? <Route  component={component}/> //hack
                : <Redirect to='/signUp'/>
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps in Router');
    return{
        isAuthenticated : state.auth.authorized
    }
}

export default  withRouter(connect(mapStateToProps)(Router));