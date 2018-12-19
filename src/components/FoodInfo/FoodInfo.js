import React, {Component} from 'react';
import './FoodInfo.scss'
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {searchFoodInfo} from "../../actions/action_searchFoodInfo";



class FoodInfo extends Component{
    returnFoodData = () =>{
        const {FAT, CHOCDF, ENERC_KCAL, FIBTG , PROCNT } = this.props.nutrients;
        // console.log(FAT);
        const fat    = FAT;
        const chocdf = CHOCDF;
        const kcal   = ENERC_KCAL;
        const fibtg  = FIBTG;
        const procnt = PROCNT;
        return (
            <ul>
                <li><p>Жири - {fat}</p></li>
                <li><p>Вуглеводи - {chocdf}</p></li>
                <li><p>Кілокалорії - {kcal}</p></li>
                <li><p>Харчові волокна - {fibtg}</p></li>
                <li><p>Протеїн - {procnt}</p></li>
            </ul>
        );
    }
    render() {
        // console.log(this.props.nutrients);
        console.log('render FoodInfo');

        if(!this.props.nutrients){
            return <div>search your food</div>
        }
        return(
            <div>
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