import React from 'react';
import TimeSlot from './timeSlot';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return { 
        showModal: state.showModal
        
    }
}

class List extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            testArray : [
                {time:"9:00 AM", name:"", phoneNum: ""},
                {time:"10:00 AM", name:"", phoneNum: ""},
                {time:"11:00 AM", name:"", phoneNum: ""},
                {time:"12:00 PM", name:"", phoneNum: ""},
                {time:"1:00 PM", name:"", phoneNum: ""},
                {time:"2:00 PM", name:"", phoneNum: ""},
                {time:"3:00 PM", name:"", phoneNum: ""},
                {time:"4:00 PM", name:"", phoneNum: ""},]
        }
    }
 

    render(){
        const { testArray} = this.state;
        const row = []
        for (let i = 0; i<testArray.length; i++) {
            console.log(testArray[i])
            row.push(<TimeSlot key={i} timeInfo={testArray[i]}
            />)
        }
        return(
            <div>
               {console.log(this.props.showModal)}

                <h1>TimeSlots</h1>

                <div>
                    {row}
                </div>  
            </div>   
        )
    }
}

const App = connect (mapStateToProps)(List);


export default App;