import React from 'react';
import Modal from '../components/modal'

const TimeSlot = ({ timeslot }) => (


  <li
  >
   
    <Modal
      name = {timeslot.name}
      phonenum = {timeslot.phonenum}
      time = {timeslot.time}
      index = {timeslot.id}
      completed = {timeslot.completed}
    />
  </li>
)

   
 
export default TimeSlot;