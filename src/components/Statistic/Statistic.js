import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import './statistic.scss';

class Statistic extends Component{
    render() {
        return (
            <div className='cc-statistic'>some stats</div>
        );
    }
}
export default withRouter(Statistic);