import React, { useState } from 'react';

const ControlledField = () => {

    const[password, setPassword]=useState('secret');
    const [error, setError]=useState('');

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log('submitter')
    //     // if(password.length<6){
    //     //     setError('Password must be at least 6 characters long');
    //     // }
    //     // else{
    //     //     setError('');
    //     // }
    // }

    const handlePasswordOnChange=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length<6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }
    }

    return (
        <div>
            <form>
                <input type="email" name='email' placeholder='Enter your email' required/>
                <br />
                <input type="password" name='password' placeholder='Enter your password' onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>
                {error}
            </p>
        </div>
    );
};

export default ControlledField;