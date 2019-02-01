export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const TOGGLE_SUBMIT = 'TOGGLE_SUBMIT'
/*
 * action creators
 */

export function toggleModal(index) {
  return { type: TOGGLE_MODAL, index}
}
export function toggleSubmit(customer){
  return { type: TOGGLE_SUBMIT, customer}
}

