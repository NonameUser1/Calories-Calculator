import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FoodInfo from '../FoodInfo';
import FoodSearch from '../FoodSearch';


class GetNutrientsInfo extends Component{
    render() {
        return(
            <div>
                <FoodSearch/>
                <FoodInfo/>
            </div>
        );
    }
}

export default withRouter(GetNutrientsInfo);