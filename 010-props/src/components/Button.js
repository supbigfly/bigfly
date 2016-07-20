import React, { Component } from 'react';

class Button extends Component {
  getStyles() {
     return {
       button: {
         color: '#fff',
         backgroundColor: this.props.bg,
         borderColor: this.props.bdcolor,
         padding: '4px 15px 5px 15px',
         fontSize: '14px',
         borderRadius: '6px'
       }
     }
   }
  render(){
    const styles = this.getStyles();
    return (
      <button style={styles.button}>{this.props.title}</button>
    );
  }
}

export default Button;
