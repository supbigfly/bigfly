import React, { Component } from 'react';

class Button extends Component {
  getStyles() {
     return {
       root: {
         backgroundColor: 'gray'
       }
     }
   }

  render(){
    const styles = this.getStyles();
    return (
      <button style={styles.root}>click</button>
    );
  }
}

export default Button;
