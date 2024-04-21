import React, { useContext, useEffect } from 'react'
import useFetchUsers from '../useFetchUsers';
import UserContext from '../../context/UserContext';
import { ListWrapper } from './ListStyle';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function List() {

    const {users, handleAddUser, deleteUserResource, editUserResource} = useContext(UserContext);
    const {data, isLoading, error} = useFetchUsers('https://jsonplaceholder.typicode.com/users');

    // Assign the fetched user from the api to users state.
    useEffect(() => {
        if(data && data.length > 0 && users.length === 0){
            handleAddUser(data);
        }
    }, [data, users])
    
    if(isLoading) return <h1>Loading....</h1>

    if(error) return (
        <h1>Error while fetching the list Contacts: {error.message}</h1>
    );

    return (
      <ListWrapper>
        {   
            users.map((user, index) => (
                <li key={index}>
                    <div>
                        <span>{user.username}</span>
                        <p className='user-name'>
                            {user.name}
                        </p>    
                        <span>{user.email}</span><br/>
                        <span>{user.phone}</span>
                    </div>
                    <div>
                        <p>
                            {user.company.name}
                        </p> 
                    </div>
                    <div className="highlight-circles userId">
                        {index + 1}
                    </div>
                    <div className="highlight-circles btn edit-btn" onClick={() => editUserResource(user)}>
                        <MdEdit />
                    </div>
                    <div className="highlight-circles btn delete-btn" onClick={() => deleteUserResource(user.id)}>
                        <MdDelete />
                    </div>
                </li>
            ))
        }
      </ListWrapper>
    )
}