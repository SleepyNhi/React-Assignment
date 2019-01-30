const initialState = {
    showModal9: false,
    showModal10: false,
    showModal11: false,
    showModal12: false,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
  };
  
  function resReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case "TOGGLE_MODAL9":
        return Object.assign({}, state, {
          showModal9: action.showModal
        });
        case "TOGGLE_MODAL10":
        return Object.assign({}, state, {
          showModal10: action.showModal
        });
        case "TOGGLE_MODAL11":
        return Object.assign({}, state, {
          showModal11: action.showModal
        });
        case "TOGGLE_MODAL12":
        return Object.assign({}, state, {
          showModal12: action.showModal
        });
        case "TOGGLE_MODAL1":
        return Object.assign({}, state, {
          showModal1: action.showModal
        });
        case "TOGGLE_MODAL2":
        return Object.assign({}, state, {
          showModal2: action.showModal
        });case "TOGGLE_MODAL3":
        return Object.assign({}, state, {
          showModal3: action.showModal
        });
        case "TOGGLE_MODAL4":
        return Object.assign({}, state, {
          showModal4: action.showModal
        });
      default:
        return state;
    }
  }
  
  export default resReducer;
  