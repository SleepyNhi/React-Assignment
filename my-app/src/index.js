import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import TimeSlot from "./components/timeSlot";

const store = createStore(reducer);
const rootEl = document.getElementById("root");
  
const render = () =>
  ReactDOM.render(
    <div>
      <h1>TimeSlots</h1>
      <ul>
        <TimeSlot
          time={"9:00 AM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL9",
              showModal: !store.getState().showModal9
            })
          }
          showModal={store.getState().showModal9}
        />
        <TimeSlot
          time={"10:00 AM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL10",
              showModal: !store.getState().showModal10
            })
          }
          showModal={store.getState().showModal10}
        />
        <TimeSlot
          time={"11:00 AM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL11",
              showModal: !store.getState().showModal11
            })
          }
          showModal={store.getState().showModal11}
        />
        <TimeSlot
          time={"12:00 AM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL12",
              showModal: !store.getState().showModal12
            })
          }
          showModal={store.getState().showModal12}
        />
        <TimeSlot
          time={"1:00 PM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL1",
              showModal: !store.getState().showModal1
            })
          }
          showModal={store.getState().showModal1}
        />
        <TimeSlot
          time={"2:00 PM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL2",
              showModal: !store.getState().showModal2
            })
          }
          showModal={store.getState().showModal2}
        />
        <TimeSlot
          time={"3:00 PM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL3",
              showModal: !store.getState().showModal3
            })
          }
          showModal={store.getState().showModal3}
        />
        <TimeSlot
          time={"4:00 PM"}
          toggleModal={() =>
            store.dispatch({
              type: "TOGGLE_MODAL4",
              showModal: !store.getState().showModal4
            })
          }
          showModal={store.getState().showModal4}
        />
      </ul>
    </div>,
    rootEl
  );

render();
store.subscribe(render);
