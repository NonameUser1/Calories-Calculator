import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import './authorization.scss';

class Authorization extends Component{



    render() {
        console.log('Auth status');
        console.log(this.props.auth);
        return (
            <div className="cc-header__authorization cc-authorization">
                { this.props.auth
                    ?
                    <div>
                        <Link className='cc-authorization__signUp' to='/signUp'>Sign up</Link>
                        <Link className='cc-authorization__logIn' to='/logIn'>Log in</Link>
                    </div>
                    :
                    <button>Log out</button>

                }
            </div>
        );
    }
}

function mapStateToProps(state){         // passing state from store to props of component
    return{
        auth: state.auth
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({} , dispatch)
}

export default connect(mapStateToProps , matchDispatchToProps)(Authorization);