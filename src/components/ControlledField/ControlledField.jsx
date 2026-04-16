import React, { useState } from 'react';

const ControlledField = () => {

    const[password, setPassword]=useState('secret');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submitter')
    }

    const handlePasswordOnChange=(e)=>{
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Enter your email' required/>
                <br />
                <input type="password" name='password' placeholder='Enter your password' onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;