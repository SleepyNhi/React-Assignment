import {connect} from 'react-redux';
import {toggleTime, toggleModal} from '../actions/index';
import TimeslotList from './timeslotList';

const getVisibleTodos = (timeslots, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }


const mapStateToProps = state => {
    return {
      timeslots: getVisibleTodos(state.time, state.showModal)
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onToggleModal: id => {
        dispatch(toggleModal(id))
      }
    }
  }

  const GetList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
  
  export default GetList
  