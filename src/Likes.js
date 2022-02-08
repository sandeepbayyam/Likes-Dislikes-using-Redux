import React from 'react';
import './style.css'
import {connect} from 'react-redux';

const Likes =(props)=>{
  console.log(props);
  return(
    <div className='betterview'>
      <button onClick={()=>{
         props.dispatch({type:'Likeinc'})
      }}>Like</button>:{props.Likes}
      <hr/>
      <button onClick={()=>{
         props.dispatch({type:'Dislikeinc'})
      }}>Dislike</button>:{props.Dislikes}
    </div>
  )
}
export default connect((store)=>{ 
  return store;
}) (Likes);