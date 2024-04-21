import React, { useState } from 'react'
import UserContext from './UserContext';

export default function UserContextProvider({children}) {
  const [users, setUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [submitBtn, setSubmit] = useState(true);

  // Handle Modal Popup Close/Open
  const handleModalPopup = () => {
    setIsModalOpen(!isModalOpen);
  }

  // ------------------------------ ADD Handlers ----------------------------------------------------------------------------

  // Handle Event when the Add button is clicked
  const handleAddContact = () =>{
    setEditedUser(null)
    setSubmit(true)
    handleModalPopup()
  }

  // Handle the Add User Action on State
  const handleAddUser = (user) => {
    setUser([...users, ...user])
  }

  // ------------------------------ Delete Handlers -------------------------------------------------------------------------

  // Handle the Delete User Action on State
  const handleDeleteUser = (id) => {
    let newUsers = users.filter((user, index) => user.id !== id)
    setUser(newUsers)
  }

  // ------------------------------ Edit Handlers ----------------------------------------------------------------------------

  // Handing the Modal Popup and Pre-population on fields values on form
  const handleEditContact = (user, values) => {
    setEditedUser(user)
    setSubmit(false)
    setIsModalOpen(true)
  }

  // Handle the Edit User Action on State
  const handleEditUserState = (selectedUser) => {
    const updatedUser = users.map((user) => {
      if(user.id === selectedUser.id){
        return selectedUser
      }else{
        return user
      }
    });

    setUser(updatedUser);
  }

  // ------------------------------ API Operation Handlers --------------------------------------------------------------------
            
  //Posting the New User data to the api, to add new user to contact list.
  const postNewUser = (values) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        phone: values.phone,
        username: values.username,
        website: values.website,
        company:{
            name: values.companyname,
            bs: values.companycaption,
            catchphrase: values.companycatchphrase,
        },
        address: {
            suite: values.suite,
            street: values.streetname,
            city: values.city,
            zipcode: values.zipcode,
        }
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => handleAddUser([json]));
  }

  //Deleting a User data via api, to delete the user from the contact list.
  const deleteUserResource = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok){
        handleDeleteUser(id);
      }
    });
  }

  // Editing the User data via api, to edit the user details of user in the contact list.
  const putUserEdit = (values) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: editedUser.id,
        email: values.email,
        name: values.name,
        phone: values.phone,
        username: values.username,
        website: values.website,
        company:{
            name: values.companyname,
            bs: values.companycaption,
            catchphrase: values.companycatchphrase,
        },
        address: {
            suite: values.suite,
            street: values.streetname,
            city: values.city,
            zipcode: values.zipcode,
        }
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }

      return response.json()
    })
    .then((json) => handleEditUserState(json))
    .catch((error) => {
      console.log("Error while working with the API: ", error);
    })
  }
  
  // All the context state, functions that can be accessed within the while provider tree.
  const contextVariable = {
    users, 
    handleAddUser, 
    isModalOpen, 
    handleModalPopup, 
    postNewUser,
    deleteUserResource,
    putUserEdit,
    handleEditContact,
    editedUser,
    setEditedUser,
    submitBtn,
    setSubmit,
    handleAddContact
  };

  return (
    <UserContext.Provider value={contextVariable}>
      {children}
    </UserContext.Provider>
  )
}
