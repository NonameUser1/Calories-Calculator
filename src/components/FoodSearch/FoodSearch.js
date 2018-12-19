import React , {Component} from 'react';
import './FoodSearch.scss';
import {API_URL, MY_API_ID, MY_API_KEY} from "../../consts";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchFoodInfo} from '../../actions/action_searchFoodInfo';  // importing action creator

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
        const nutrients = data.parsed[0].food.nutrients;
        // console.log(nutrients);
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



function mapStateToProps(state) {         // passing state from store to props of component
    console.log('passing state to props');
    return{
        nutrients: state.nutrients
    }
}

function matchDispatchToProps(dispatch) {  // passing action to props?
    return bindActionCreators({searchFoodInfo: searchFoodInfo},dispatch)
}

export default connect(mapStateToProps , matchDispatchToProps)(FoodSearch); // connecting component to store