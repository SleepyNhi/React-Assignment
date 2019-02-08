import React from 'react';
import TimeSlot from './timeSlot';
import { connect} from 'react-redux';

const mapStateToProps = state => {
    return { timeslots: state }
}


const ConnectTimeslotList = ({ timeslots }) => (
    <ul>
        {timeslots.map((timeslot) => (
            <TimeSlot key={timeslot.id} {...timeslot} 
                timeslot={timeslot}
                />    
        ))}
        {console.log(timeslots)}
    </ul>
);

const TimeslotList = connect(mapStateToProps)(ConnectTimeslotList);

export default TimeslotList;