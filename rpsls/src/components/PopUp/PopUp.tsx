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
    backgroundColor:'rgba(255,255,255,.8)',
    backdropFilter: 'blur(5px)',
    position: 'absolute',
    top: 'calc(50% - 350px)',
    left: 'calc(50% - 350px)'
  }
}



Modal.setAppElement('#root');

function PopUp(props) {
  let {children, showBoard, setShowBoard} = props;
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
    setShowBoard(!showBoard);
  }
 
  return (
    <>
      <button className='open-button' onClick={toggleModal}>{children} </button>
      <Modal className ='modal' isOpen={open} style={customStyles} onRequestClose={toggleModal}>
        <button className='close-button' onClick={toggleModal}>x</button>
        <Rules/>
      </Modal>
    </>
  )
}

export default PopUp;