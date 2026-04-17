import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name,nameOnChange]=useInputField('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit: ',name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;