import React, { useState } from 'react';
import { getAccountById } from '../api/AccountApi';

const GetAccount = () => {
    const [id, setId] = useState('');
    const [account, setAccount] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await getAccountById(id);
            setAccount(response.data);
        } catch (error) {
            console.error('Error fetching account:', error);
        }
    };

    const containerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    };

    const formStyle = {
        marginBottom: '20px',
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

    const accountInfoStyle = {
        padding: '10px',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Get Account</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label>Account ID:</label>
                <input 
                    type="text" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    required 
                    style={inputStyle} 
                />
                <button type="submit" style={buttonStyle}>Get Account</button>
            </form>
            {account && (
                <div style={accountInfoStyle}>
                    <p><strong>ID:</strong> {account.id}</p>
                    <p><strong>Name:</strong> {account.accountHolderName}</p>
                    <p><strong>Balance:</strong> {account.balance.toFixed(2)} Rs</p>
                </div>
            )}
        </div>
    );
};

export default GetAccount;
