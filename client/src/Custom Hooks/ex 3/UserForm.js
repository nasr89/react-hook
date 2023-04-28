import React from 'react'
import useInput from './useInput';

const UserForm = () => {
    const [firstName,bindFirstName,resetFirstName] = useInput("");
    const [lastName,bindLastName,resetLastName] = useInput("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input {...bindFirstName} placeholder='firstname' />
            <input {...bindLastName} placeholder='lastname' />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default UserForm