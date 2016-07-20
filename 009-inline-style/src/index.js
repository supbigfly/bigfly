import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import Input from './components/Input.js'


class App extends Component {
  getStyles() {
     return {
       root: {
         backgroundColor: 'gray',
         height: '300px',
         padding: '20px'
       }
     }
   }
  render(){
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        <Input />
        <Button />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
