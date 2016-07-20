import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/cardlist.js';
import Cards from './components/cards.js';

class App extends Component{
  render(){
    return(
      <div>
        <CardList index="1" title="hahaha" date="2016-07-20"/>
        <CardList />
        <Cards />
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
