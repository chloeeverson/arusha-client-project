const report = (state = {}, action) => {
    console.log('hello from the report reducer');
    console.log('payload reducer:', action.payload)
    // set specific saved list clicked on with data from server
    if (action.type === 'SET_REPORT') {
      //the action payload is a new array from the server
      //it has ALL the information in it - no need to spread 
      //& add to previous state
      return action.payload;
    }
    return state;
  }
  
  export default report;