import React from 'react';
//import TimeSlot from './timeSlot';
import { connect} from 'react-redux';
import Modal from '../components/modal'

const mapStateToProps = state => {
    return { timeslots: state }
}

const ConnectTimeslotList = ({ timeslots }) => (
    <ul>
        {timeslots.map((timeslot) => (
            <li key={timeslot.id} {...timeslot}> 
                <Modal
                    timename =  {timeslot.time}
                    index = {timeslot.id}
                    name = {timeslot.name}
                    phonenum = {timeslot.phonenum}
                    completed = {timeslot.completed}
                    >
                </Modal>
            </li>
        ))}
    </ul>
);

const TimeslotList = connect(mapStateToProps)(ConnectTimeslotList);

export default TimeslotList;