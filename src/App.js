import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {getQoutes} from './actions/QoutesAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from './components/Header.js';
import Home from './components/Home';
import logo from './logo.svg';
import './App.scss';

class App extends Component{

 

  render(){

    
  return (
 
    <Home />
  )};
}


const mapDispatchToProps = dispatch =>{
  return{
      ...bindActionCreators({
        
      },dispatch)
  }
}

const mapStateToProps = (state) =>{
  return{
      loader: state.QoutesReducer.loader,
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
