import React, { useState } from 'react';
import '../App.css';

const AddContact = ({addContact}) => {
    const [formData, setformData] = useState({name: "", email: ""});

    const handleInput = (e) => {
        // console.log(e.target);
        if(e.target.name === 'name'){
            setformData({...formData, name: e.target.value});
        }
        else if(e.target.name === 'email'){
            setformData({...formData, email: e.target.value});
        }
        
    }

    const handleAdd = () => {
        if(formData.name === "" || formData.email === ""){
            alert("Please fill all the details...");
            return;
        }
        
        addContact(formData);
        setformData({...formData, name: "", email: ""});

        // console.log(formData);
    }

  return (
    <div className='add_contact'>
        <h2> Add Contact </h2>
        <form>
            <div className='field'>
                <label> Name: </label>
                <input type='text' name='name' value={formData.name} onChange={handleInput} />
            </div>

            <div className='field'>
                <label>Email: </label>
                <input type="email" name='email' value={formData.email} onChange={handleInput} />
            </div>
        </form>

        <button onClick={handleAdd} className='btn'>Add Contact</button>
    </div>
  )
}

export default AddContact