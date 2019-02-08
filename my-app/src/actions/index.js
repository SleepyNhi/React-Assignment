
export const TOGGLE_ADD = 'TOGGLE_ADD'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const TOGGLE_RED = 'TOGGLE_RED'
/*
 * action creators
 */

export function toggleRed(id){
  return { type: TOGGLE_ADD, id}
}

export function addEntry(entry){
  return { type: TOGGLE_ADD, entry}
}

export function toggleModal(){
  return { type: TOGGLE_MODAL }
}