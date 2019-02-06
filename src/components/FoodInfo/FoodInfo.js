import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from 'react-google-charts';
// import {bindActionCreators} from 'redux';
// import {searchFoodInfo} from "../../actions/action_searchFoodInfo";

import './foodInfo.scss';


class FoodInfo extends Component{

    returnFoodData = () =>{

        return (
            <ul className='cc-foodInfo__list'>
                <li className='cc-foodInfo__item'>
                    <div className='flex-row'>
                        <div className="cc-foodInfo__color-label color-label--green"></div>
                        <p>Fat - </p>
                    </div>
                    <span>{this.props.nutrients.fat}</span>
                </li>
                <li className='cc-foodInfo__item'>
                    <div className='flex-row'>
                        <div className="cc-foodInfo__color-label color-label--red"></div>
                        <p>Carbohydrates - </p>
                    </div>
                    <span>{this.props.nutrients.chocdf}</span>
                </li>
                <li className='cc-foodInfo__item'>
                    <div className='flex-row'>
                        <div className="cc-foodInfo__color-label color-label--blue"></div>
                        <p>Kilocaloria - </p>
                    </div>
                    <span>{this.props.nutrients.kcal}</span>
                </li>
                <li className='cc-foodInfo__item'>
                    <div className='flex-row'>
                        <div className="cc-foodInfo__color-label color-label--yellow"></div>
                        <p>Dietary fiber - </p>
                    </div>
                    <span>{this.props.nutrients.fibtg}</span>
                </li>
                <li className='cc-foodInfo__item'>
                    <div className='flex-row'>
                        <div className="cc-foodInfo__color-label color-label--purple"></div>
                        <p>Protein - </p>
                    </div>
                    <span>{this.props.nutrients.procnt}</span>
                </li>
            </ul>
        );
    }
    returnChart = () =>{

        const pieOptions = {
            slices: [
                {
                    color: "#2BB673"
                },
                {
                    color: "#d91e48"
                },
                {
                    color: "#007fad"
                },
                {
                    color: "#e9a227"
                },
                {
                    color: "#B400E9"
                }
            ],
            legend: {position: 'none'},
            tooltip: {
                showColorCode: false
            },
            chartArea: {
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            },
            backgroundColor: "yellow" , /*"transparent"*/
            border: "none",
            fontName: "Roboto"
        };

        return(
          <Chart
              width='100%'
              height= '100%'
              chartType ='PieChart'
              options={pieOptions}
              data = {[
                  ['Nutrients', 'Value per 100 gram'],
                  ['Fat',           this.props.nutrients.fat    ],
                  ['Carbohydrates', this.props.nutrients.chocdf ],
                  ['Kilocaloria',   this.props.nutrients.kcal   ],
                  ['Dietary fiber', this.props.nutrients.fibtg  ],
                  ['Protein',       this.props.nutrients.procnt ]
              ]}
              loader={<div>Loading Chart</div>}

          />
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
                <div className='cc-foodInfo__pie-chart'>
                    {this.returnChart()}
                </div>
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


export default connect(mapStateToProps)(FoodInfo);