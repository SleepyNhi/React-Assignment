
export const TOGGLE_ADD = 'TOGGLE_ADD'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

/*
 * action creators
 */



export function addEntry(entry){
  return { type: TOGGLE_ADD, entry}
}

export function toggleModal(){
  return { type: TOGGLE_MODAL }
}