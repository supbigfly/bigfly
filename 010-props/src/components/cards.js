import React,{Component} from 'react';

import CardList from './cardlist';

let meg=[
  {title:"hahaha",date:"2016.6.21"},
  {title:"hahaha",date:"2016.6.21"},
  {title:"hahaha",date:"2016.6.21"},
  {title:"hahaha",date:"2016.6.21"}
]

class Cards extends Component{
  render(){
    let megs=[];
    for(var i=0;i<meg.length;i++){
      megs.push(
        <CardList title={meg[i].title} date={meg[i].date} index={i} key={i}/>
      )
    }
    return(
      <div>
        {megs}
      </div>
    )
  }
}
export default Cards;
