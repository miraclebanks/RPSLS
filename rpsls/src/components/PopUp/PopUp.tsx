import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/PopUp.css';
import Rules from '../Rules/Rules.tsx';

const customStyles = {
  overlay:{
    backgroundColor:"none"
  },
  content: {
    height: '700px',
    width: '700px',
    transform: 'translate(40%, 15%)',
    backgroundColor:'rgba(255,255,255,.8)',
    backdropFilter: 'blur(5px)',
  }
}

Modal.setAppElement('#root');

function PopUp(props) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }
  return (
    <>
      <button className='open-button' onClick={openModal}>{props.children} </button>
      <Modal className ='modal' isOpen={open} style={customStyles} onRequestClose={() => setOpen(false)}>
        <button className='close-button' onClick={closeModal}>x</button>
        <Rules></Rules>
      </Modal>
    </>
  )
}

export default PopUp;