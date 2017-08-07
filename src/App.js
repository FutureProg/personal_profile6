import React, { Component } from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux'
import classNames from 'classnames';

import Home from './Home/Home.js';
import Design from './Design/Design';
import Code from './Code/Code';
import Contact from './Contact/Contact';
import Credits from './Credits';

import MediumIcon from './img/Medium-white.svg';
import TwitterIcon from './img/Twitter-white.svg';
import GithubIcon from './img/Github-white.svg';
import './App.css';

const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const history = createHistory()
const store = createStore(
  combineReducers({
    routing: routerReducer
  }),   
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  );


class App extends Component {  
  render() {    
    return (
      <div className="App">    
        <Provider store={store}>                  
            <AppContent/>                      
        </Provider>
      </div>
    );
  }
}

class AppContent extends Component{
    

    render(){
      const classname = classNames('AppContent');
      return (
        <ConnectedRouter history={history}>    
          <div className={classname}>                                          
              <Switch>
                <Route name="home" exact path="/" component={Home}/> 
                <Route name="design" path="/design" component={Design}/>    
                <Route name="code" path="/code" component={Code}/>   
                <Route name="contact" path="/contact" component={Contact}/>
                <Route name="credits" path="/credits" component={Credits}/>                                              
              </Switch>              
              <Footer/>
          </div>
        </ConnectedRouter>               
      )
    }
}
const mapStateToPropsAC = (state,ownProps) =>({    
  location: state.routing.location
})
AppContent = connect(mapStateToPropsAC)(AppContent);

class Footer extends React.Component{
  render(){
    return (
      <footer>
        <span>
          <a href="https://twitter.com/tr3jak">
            <img src={TwitterIcon} height='24px' alt="twitter icon"/>            
          </a>
        </span>        
        <span>
          <a href="https://medium.com/@nickolas">
            <img src={MediumIcon} height='24px' alt="medium icon"/>            
          </a>
        </span>
        <span>
          <a href="https://github.com/FutureProg">
            <img src={GithubIcon} height='24px' alt="github icon"/>            
          </a>
        </span>
        <span>     
          <a href="/credits">
            Credits
          </a>
        </span>
      </footer>
    )
  }
}

export default App;
