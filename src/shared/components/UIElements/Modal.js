import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import BackDrop from "./BackDrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
  return ReactDOM.createPortal(
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.header}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>,
    document.getElementById("modal-hook")
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
