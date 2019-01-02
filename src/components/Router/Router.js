import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
                    <Route path='/analyze'   component={GetNutrientsInfo}/>
                    <Route path='/statistic' component={Statistic}/>
                    <Route path='/about'     component={About}/>
                    <Route path='/logIn'    component={LogInForm}/>
                    <Route path='/signUp'    component={SignUpForm}/>
                </Switch>
            </main>
        )
    }
}

export default Router;