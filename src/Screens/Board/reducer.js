const reducer = (state, action) => {
  switch(action.type){
    case 'move': 
      return move(state, action.payload.next, action.payload.id);
    default:
      throw new Error();
  }
}

const move = (state, next, id) => {
  return state.map(task => {
    if(task.id === id){
      task.status = next;
    }
    return task;
  })
}

export default reducer;