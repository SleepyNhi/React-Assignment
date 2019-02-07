import React from 'react';
import { connect } from 'react-redux';
import {addEntry} from '../actions/index';
import '../index.css';
import Modal from 'react-modal';



function mapDispatchToProps(dispatch) {
    return {
        addEntry: entry => dispatch(addEntry(entry))
    }
}

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


class ModalApp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showModal : false,
            id: this.props.index,
            name: this.props.name,
            phonenum: this.props.phonenum,
            completed: this.props.completed
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
   
    }
    toggleModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    }
    toggleSubmit = () => {
        // this.props.addEntry({})
        let entry = {name: this.state.name, phonenum: this.state.phonenum, index: this.state.id}
        
        console.log("submit thru togglesubmit", entry, this.state.completed)
        this.props.addEntry({entry} )
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }



    render() {
        return (
            <div className="container">
                <h4 onClick={this.toggleModal} style={this.state.completed === "false" ? {color:'red'} : {color:'black'} }>{this.props.timename}{this.props.index}{this.state.completed}</h4>
                {this.state.showModal && <div>
                    <Modal 
                        isOpen={this.state.showModal}
                        style={customStyles}>
                        
                        <h2 ref={subtitle => this.subtitle = subtitle}>Registration</h2>
                
                        <form>
                        <label>Name</label>
                            <input
                                type="text" 
                                id="name"
                                value = {this.state.name}
                                onChange = {this.handleChange}
                                />
                        </form>
                        <form>
                        <label>Phone Number</label>
                            <input
                                type="text"
                                id="phonenum"
                                value = {this.state.phonenum}
                                onChange = {this.handleChange}
                                />
                            
                        </form>
                        <button onClick={this.toggleSubmit}>Submit</button>                                
                        
                    </Modal>          
                        
                </div>}
            </div>
        )
    }
        
}



  export default connect(null, mapDispatchToProps)(ModalApp);