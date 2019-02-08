import { TOGGLE_ADD } from "../actions/index";


 const testArray = 
     [
    {id: 0,time:"9:00 AM", name:"", phonenum: "",completed:"false"},
    {id: 1,time:"10:00 AM", name:"", phonenum: "",completed:"false"},
    {id: 2,time:"11:00 AM", name:"", phonenum: "",completed:"false"},
    {id: 3,time:"12:00 PM", name:"", phonenum: "",completed:"false"},
    {id: 4,time:"1:00 PM", name:"", phonenum: "",completed:"false"},
    {id: 5,time:"2:00 PM", name:"", phonenum: "",completed:"false"},
    {id: 6,time:"3:00 PM", name:"", phonenum: "",completed:"false"},
    {id: 7,time:"4:00 PM", name:"", phonenum: "",completed:"false"},]
  
function rootReducer(state = testArray, action) {
      switch (action.type) {
          
          case TOGGLE_ADD:

            return state.map((time, index) => {
              if(index !== action.entry.id){
                return time
              }
              return {
                ...time,
                name: action.entry.name, 
                phonenum: action.entry.phonenum,
                completed: "true"
              }
            } )
    
          default:
            return state
          }    
  }

  export default rootReducer