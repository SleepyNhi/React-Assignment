import React from 'react';
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

  const ModalApp = () => {
        
        return (
        <div>
                {this.props.showModal && <div> 
                    <Modal 
                        isOpen={this.props.showModal}
                        style={customStyles}>
                        
                        <h2 ref={subtitle => this.subtitle = subtitle}>Registration</h2>
                
                        <form>
                        <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name} 
                                onChange={this.handleName}
                                />
                        </form>
                        <form>
                        <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNum"
                                value={phoneNum}
                                onChange={this.handlePhoneNum}
                                />
                            
                        </form>
                        <button onClick={toggleModal}>Submit</button>                                
                        
                    </Modal>          
                        
                </div>}
        </div> );
  }