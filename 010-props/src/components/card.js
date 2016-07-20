import React, { Component } from 'react';

class Card extends Component {
  render(){
    let boxs = {
      share:{
        width:"500px",
        height:"80px",
        backgroundColor:"gray",
        marginBottom:"20px"
      },
      left:{
        width:"10%",
        backgroundColor:"blue",
        lineHeight:"80px",
        textAlign:"center",
        color:"white",
        float:"left"
      },
      right:{
        width:"90%",
        height:"80px",
        float:"left",
        textAlign:"center",
        color:"white",
        backgroundColor:"green"
      }
    };
    return(
      <div>
        <div style={boxs.share}>
          <div style={boxs.left}>{this.props.title}</div>
          <div style={boxs.right}>
            <div>{this.props.name}</div>
            <div>{this.props.data}</div>
          </div>
        </div>
      </div>
    )
  }

}

export default Card;
