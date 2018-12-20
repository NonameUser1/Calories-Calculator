import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FoodInfo from '../FoodInfo';
import FoodSearch from '../FoodSearch';

import './getnutrientsinfo.scss';

class GetNutrientsInfo extends Component{
    render() {
        return(
            <div className='cc-GetNutrientsInfo'>
                <FoodSearch/>
                <FoodInfo/>
            </div>
        );
    }
}

export default withRouter(GetNutrientsInfo);