import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };



const createTime = () => {
    let hourArray = [];
    let startDate = 9;
    let endDate = 17; 
        for (let i =startDate; i<endDate; i++){
            if (i < 12){
                hourArray.push(i + ':00 AM');
            } else if (i>12) {
                hourArray.push(i-12 + ':00 PM');
            } else {
                hourArray.push(12 + ':00 PM');
            }
        }
    return hourArray;
}
const time = createTime();


class TimeSlot extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showModal:false,
            name: '',
            phoneNum: ''

        }
        this.handleName = this.handleName.bind(this);
        this.handlePhoneNum = this.handlePhoneNum.bind(this); 
    }


    toggleModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    }
    handleName(e) {
        this.setState({name: e.target.value});
    }
    handlePhoneNum(e) {
        this.setState({phoneNum: e.target.value});
    }

    render(){
        return (
        <div>
            <div
                id="button"
                className={this.state.name.length > 0 || this.state.phoneNum.length > 0 ? "ChangeColor" : null}
                onClick={this.toggleModal}>
                        {this.props.time}
            </div>
                {this.state.showModal && <div>
                    <Modal 
                        isOpen={this.state.showModal}
                        style={customStyles}>
                        
                        <h2 ref={subtitle => this.subtitle = subtitle}>Registration</h2>
                
                        <form>
                        <label>Name</label>
                            <input
                                type="text" 
                                value={this.state.name} 
                                onChange={this.handleName}
                                />
                        </form>
                        <form>
                        <label>Phone Number</label>
                            <input
                                type="text"
                                value={this.state.phoneNum}
                                onChange={this.handlePhoneNum}
                                />
                            
                        </form>
                        <button onClick={this.toggleModal}>Submit</button>                                
                        
                    </Modal>          
                        
                </div>}
        </div> 
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            }
        }
    

    render(){
        return(
            <div>
                <ul>
                   {this.props.numbers.map((number) => <TimeSlot time={number}/>)}             
                </ul>  
            </div>   
        )
    }
}


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          hourList: time,
        };
    }

    render(){
       return(
           <div>
                <h1>
                    Appointment time
                </h1> 
                <div id="list">
                    <App numbers={time}/>
                </div>    
           </div>      
        );
     }
 }




ReactDOM.render(<Main/>, document.getElementById('root'));
