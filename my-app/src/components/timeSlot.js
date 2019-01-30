import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class TimeSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNum: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handlePhoneNum = this.handlePhoneNum.bind(this);
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handlePhoneNum(e) {
    this.setState({ phoneNum: e.target.value });
  }

  render() {
    const { toggleModal } = this.props;
    return (
      <div>
        <div
          id="button"
          className={
            this.state.name.length > 0 || this.state.phoneNum.length > 0
              ? "ChangeColor"
              : null
          }
          onClick={toggleModal}
        >
          {this.props.time}
        </div>
        {this.props.showModal && (
          <div>
            <Modal isOpen={this.props.showModal} style={customStyles}>
              <h2 ref={subtitle => (this.subtitle = subtitle)}>Registration</h2>

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
              <button onClick={toggleModal}>Submit</button>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

export default TimeSlot;
