import React, { useState } from 'react';
import { createAccount } from '../api/AccountApi';

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createAccount({ accountHolderName: name, balance: parseFloat(balance) });
            alert(`Account created: ${response.data.id}`);
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };

    const formStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
    };

    const buttonStyle = {
        backgroundColor: 'green',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={headingStyle}>Create Account</h2>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={inputStyle} 
                />
            </div>
            <div>
                <label>Balance:</label>
                <input 
                    type="number" 
                    value={balance} 
                    onChange={(e) => setBalance(e.target.value)} 
                    required 
                    style={inputStyle} 
                />
            </div>
            <button type="submit" style={buttonStyle}>Create Account</button>
        </form>
    );
};

export default CreateAccount;
