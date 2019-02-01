import React from 'react';


// function mapDispatchToProps(dispatch){
//     return {toggleModal : showModal => dispatch(toggleModal(showModal)),
           
//     }
// }
// const mapStateToProps = state => {
//     return { showModal: state.showModal
//     }
// }


const TimeSlot = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)


    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: this.props.timeInfo.name,
    //         phoneNum: this.props.timeInfo.phoneNum
    //     }
    //     this.handleName = this.handleName.bind(this);
    //     this.handlePhoneNum = this.handlePhoneNum.bind(this); 
    // }

    // handleName(e) {
    //     this.setState({name: e.target.value});
    // }
    // handlePhoneNum(e) {
    //     this.setState({phoneNum: e.target.value});
    // }

   
 
export default TimeSlot;