import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import GetNutrientsInfo from '../GetNutrientsInfo';
import About from '../About';
import Statistic from '../Statistic';


class Router extends Component{

    render(){
        return(
            <main>
                <Switch>
                    <Route path='/analyze'   component={GetNutrientsInfo}/>
                    <Route path='/statistic' component={Statistic}/>
                    <Route path='/about'     component={About}/>
                </Switch>
            </main>
        )
    }
}

export default Router;