import {connect} from 'react-redux';
import TimeslotList from './timeslotList';
//import { addEntry } from '../actions';

const mapStateToProps = state => {
    return {
      timeslots: (state.timeArray)
    }
  }



  const GetList = connect(
    mapStateToProps
  )(TimeslotList)
  
  export default GetList
  