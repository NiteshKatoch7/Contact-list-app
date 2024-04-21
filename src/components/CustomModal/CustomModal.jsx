import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa';
import ContactForm from '../ContactForm/ContactForm';
import UserContext from '../../context/UserContext';
import { ModalPopup, ModalPopupOverlay } from './CustomModalStyle';

export default function CustomModal() {

  const {isModalOpen, handleModalPopup, editedUser} = useContext(UserContext);

  return (
    <>
      {
        isModalOpen && 
        <ModalPopupOverlay>
            <ModalPopup>
              <div className='modal-header'>
                <h3>Add Contact</h3>
                <button onClick={handleModalPopup}>
                  <FaTimes />
                </button>
              </div>
              <div className='modal-body'>
                <ContactForm initialUser={editedUser} />
              </div>
            </ModalPopup>
        </ModalPopupOverlay>
      }
    </>
  )
}