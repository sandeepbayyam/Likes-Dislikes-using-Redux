const intialState = {
  Likes:0,
  Dislikes:0,
}
const reducer =(state=intialState,action)=>{
  
  if(action.type==='Likeinc'){
    return {...state,Likes: state.Likes +1,   
    };
  }
  if(action.type==='Dislikeinc'){
    return {...state,
      Dislikes:state.Dislikes +1};
  }
  return state;
}
export default reducer;