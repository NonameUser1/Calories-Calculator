import React , {Component} from 'react';
import {API_URL, MY_API_ID, MY_API_KEY} from "../../consts";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchFoodInfo} from '../../actions/action_searchFoodInfo';  // importing action creator

import './FoodSearch.scss';


class FoodSearch extends Component{
    handleSub = () =>{
        let input = this.inputCheck(this.refs.foodInput.value);
        this.handleAPIQuery(input);
    }
    inputCheck = (input) =>{
        const lettersOnly = /[^A-Za-z\s]/g;
        const clear = input.split(' ')
                           .map((item)=>{return item.replace(lettersOnly , '')})
                           .join('%20');
        return clear;
    }
    //need to check input
    handleAPIQuery = async (input) =>{  // make api request and push result to state
        const url = await fetch(`${API_URL}ingr=${input}&app_id=${MY_API_ID}&app_key=${MY_API_KEY}`);
        const data = await url.json();
        console.log('API request finished');
        // console.log(url.status);
        // const  response = url.status;
    // !!! HTTP response code is 200 even when it should be 404.I guess that`s API problem  ¯\_(ツ)_/¯
        // console.log(data);
        // const nutrients = data.parsed[0] === undefined ? 'Sorry no data found' : data.parsed[0].food.nutrients;
        // const {FAT, CHOCDF, ENERC_KCAL, FIBTG , PROCNT } = nutrients;

        const sorryNoData = 'Sorry no data found';
        const nutrients = {

            fat    : data.parsed[0].food.nutrients.FAT        ? data.parsed[0].food.nutrients.FAT        : sorryNoData,
            chocdf : data.parsed[0].food.nutrients.CHOCDF     ? data.parsed[0].food.nutrients.CHOCDF     : sorryNoData,
            kcal   : data.parsed[0].food.nutrients.ENERC_KCAL ? data.parsed[0].food.nutrients.ENERC_KCAL : sorryNoData,
            fibtg  : data.parsed[0].food.nutrients.FIBTG      ? data.parsed[0].food.nutrients.FIBTG      : sorryNoData,
            procnt : data.parsed[0].food.nutrients.PROCNT     ? data.parsed[0].food.nutrients.PROCNT     : sorryNoData
        }
        console.log(nutrients);

        this.props.searchFoodInfo(nutrients); //passing data to store
    }

    render(){
        return(
            <div className="cc-foodSearch">
                <input className="cc-foodSearch__input" ref="foodInput" type="text"/>
                <button className="cc-foodSearch__submit" onClick={this.handleSub}>subb</button>
            </div>
        );
    }
}



const mapStateToProps = state => {         // passing state from store to props of component
    console.log('passing state to props');
    return{
        nutrients: state.nutrients
    }
}

const matchDispatchToProps = dispatch => {  // passing action to props?
    return bindActionCreators({searchFoodInfo: searchFoodInfo},dispatch)
}

export default connect(mapStateToProps , matchDispatchToProps)(FoodSearch); // connecting component to store