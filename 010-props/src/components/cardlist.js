import React,{Component} from 'react';

class CardList extends Component{
  render(){
    let styles={
      root:{
        width:"80%",
        height:"100px",
        backgroundColor:"rgba(0,0,0,.5)",
        margin:"10px auto"
      },
      left:{
        width:"20%",
        height:"100px",
        lineHeight:"100px",
        backgroundColor:"teal",
        color:"#ffffff",
        textAlign:"center",
        float:"left"
      },
      right:{
        height:"100px",
        color:"white",
        float:"left",
        paddingLeft:"20px"
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.left}>{this.props.index}</div>
        <div style={styles.right}>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}
CardList.defaultProps={
  index:1,
  title:'这里是标题',
  date:'2016-06-20'
}
export default CardList;
