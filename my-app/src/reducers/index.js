import { TOGGLE_ADD } from "../actions/index";
// import {combineReducers} from 'redux';

// const initialState = {
//     showModal: false
//   }

 const testArray = 
     [
    {id: 0,time:"9:00 AM", name:"hi", phonenum: "", completed: "false" },
    {id: 1,time:"10:00 AM", name:"", phonenum: "", completed: "false" },
    {id: 2,time:"11:00 AM", name:"", phonenum: "", completed: "false"},
    {id: 3,time:"12:00 PM", name:"", phonenum: "", completed: "false"},
    {id: 4,time:"1:00 PM", name:"", phonenum: "", completed: "false"},
    {id: 5,time:"2:00 PM", name:"", phonenum: "", completed: "false"},
    {id: 6,time:"3:00 PM", name:"", phonenum: "", completed: "false"},
    {id: 7,time:"4:00 PM", name:"", phonenum: "", completed: "false"},]
  
function rootReducer(state = testArray, action) {
      switch (action.type) {
          
          case TOGGLE_ADD:
            return state.map(time => (testArray.id === action.entry.index) ? {
              ...time, name: action.entry.name, phonenum: action.entry.phonenum, completed: "true",
            } : time )
          default:
            return state
          }    
  }

  // function modalReducer(state = initialState, action){
  //   switch (action.type){
  //     case TOGGLE_MODAL:
  //       return Object.assign({}, state, {
  //         showModal : !state.showModal
  //       });
  //       default: return state
  //   }
  // }
  
  // const rootReducer = combineReducers({
  //   timeReducer,
  //   modalReducer
  // });

  export default rootReducer