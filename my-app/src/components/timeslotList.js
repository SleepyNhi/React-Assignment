import React from 'react';
import TimeSlot from './timeSlot';

const TimeslotList = ({ timeSlots, onTimeslotClick}) (
    <ul>
        {timeSlots.map((timeslot, index) => (
            <TimeSlot key={index} {...timeslot} onClick = {() => onTimeslotClick(index)} />
        ))}
    </ul>
)
export default TimeslotList;