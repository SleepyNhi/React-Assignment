import { TOGGLE_MODAL } from "../actions/index";

// const initialState = {
//     showModal: false
//   }

 const testArray = [
    {time:"9:00 AM", name:"", phoneNum: "", showModal: false},
    {time:"10:00 AM", name:"", phoneNum: "", showModal: false},
    {time:"11:00 AM", name:"", phoneNum: "", showModal:false},
    {time:"12:00 PM", name:"", phoneNum: "", showModal: false},
    {time:"1:00 PM", name:"", phoneNum: "", showModal: false},
    {time:"2:00 PM", name:"", phoneNum: "", showModal: false},
    {time:"3:00 PM", name:"", phoneNum: "", showModal: false},
    {time:"4:00 PM", name:"", phoneNum: "", showModal: false},]
  
function rootReducer(state = testArray, action) {
      switch (action.type) {
        
          case TOGGLE_MODAL:
          return Object.assign({}, state, {
            //   if ( action.index = testArray[index] ){
                  
            //   },
            showModal: !state.showModal
          })
          default:
            return state
          }    
  }
  
  export default rootReducer