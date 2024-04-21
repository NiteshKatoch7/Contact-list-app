import './App.css';
import List from './components/List/List';
import { useContext } from 'react';
import CustomModal from './components/CustomModal/CustomModal';
import { ContactHeader, ListContainer } from './AppStyle';
import UserContext from './context/UserContext';

export default function App() {
  const {handleModalPopup, setEditedUser, setSubmit} = useContext(UserContext);

  const handleAddContact = () =>{
    setEditedUser(null)
    setSubmit(true)
    handleModalPopup()
  }

  return (
    <>
      <ListContainer>
        <ContactHeader>
          <div></div>
          <h1>
            Contact List
          </h1>
          <div>
            <button className='contactBtn' onClick={handleAddContact}>Add Contact</button>
          </div>
        </ContactHeader>
        <List />
      </ListContainer>
      <CustomModal />
    </>
  );
}