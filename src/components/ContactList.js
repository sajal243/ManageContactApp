import React from 'react';
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';

const ContactList = (props) => {
    const {contact, removeContact} = props;
    const contactList = contact.map((val) => {
        return (
            <ul className='list'>
                <li>{val.data.name}</li>
                <li>{val.data.email}</li>
                <li onClick={() => removeContact(val.id)}><DeleteIcon/></li>
            </ul>
        )
    });
  return (
    <>
        <div className='list_title'>Contact List</div>
        <div>{contactList}</div>
    </>
    
  )
}

export default ContactList