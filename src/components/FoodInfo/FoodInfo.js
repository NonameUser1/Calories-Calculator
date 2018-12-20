import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {searchFoodInfo} from "../../actions/action_searchFoodInfo";

import './foodInfo.scss';


class FoodInfo extends Component{
    returnFoodData = () =>{
        const {FAT, CHOCDF, ENERC_KCAL, FIBTG , PROCNT } = this.props.nutrients;
        // console.log(FAT);
        const sorryNoData = 'Sorry no data found'
        const fat    = FAT        ? FAT        : sorryNoData;
        const chocdf = CHOCDF     ? CHOCDF     : sorryNoData;
        const kcal   = ENERC_KCAL ? ENERC_KCAL : sorryNoData;
        const fibtg  = FIBTG      ? FIBTG      : sorryNoData;
        const procnt = PROCNT     ? PROCNT     : sorryNoData;
        return (
            <ul className='cc-foodInfo__list'>
                <li className='cc-foodInfo__item'><p>Жири - {fat}</p></li>
                <li className='cc-foodInfo__item'><p>Вуглеводи - {chocdf}</p></li>
                <li className='cc-foodInfo__item'><p>Кілокалорії - {kcal}</p></li>
                <li className='cc-foodInfo__item'><p>Харчові волокна - {fibtg}</p></li>
                <li className='cc-foodInfo__item'><p>Протеїн - {procnt}</p></li>
            </ul>
        );
    }
    render() {
        // console.log(this.props.nutrients);
        console.log('render FoodInfo');

        if(!this.props.nutrients){
            return <p className='cc-foodInfo__label'>search your food</p>
        }
        return(
            <div className='cc-foodInfo'>
                {/*{this.props.nutrients}*/}
                {this.returnFoodData()}
            </div>
        );
    }
}

function mapStateToProps(state) {         // passing state from store to props of component
    console.log('passing state to props');
    return{
        nutrients: state.nutrients
    }
}
//
// function matchDispatchToProps(dispatch) {  // passing action to props?
//     return bindActionCreators({searchFoodInfo: searchFoodInfo},dispatch)
// }

export default connect(mapStateToProps)(FoodInfo);