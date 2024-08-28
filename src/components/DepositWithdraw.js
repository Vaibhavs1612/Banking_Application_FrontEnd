import React, { useState } from 'react';
import { deposit, withdraw } from '../api/AccountApi';

const DepositWithdraw = () => {
    const [id, setId] = useState('');
    const [amount, setAmount] = useState('');
    const [action, setAction] = useState('deposit');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (action === 'deposit') {
                await deposit(id, parseFloat(amount));
                setMessage(`Amount of $${amount} deposited successfully into account ID: ${id}`);
            } else {
                await withdraw(id, parseFloat(amount));
                setMessage(`Amount of $${amount} withdrawn successfully from account ID: ${id}`);
            }
        } catch (error) {
            console.error('Error performing action:', error);
            setMessage('Error occurred while performing the action.');
        }
    };

    const formStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        marginTop:50
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginRight: '10px',
    };

    const actionButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#28a745',
    };

    const withdrawButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#dc3545',
    };

    const activeActionButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#28a745', // Change color for active action
    };

    const activeWithdrawButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#c82333', // Change color for active withdraw
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={headingStyle}>{action.charAt(0).toUpperCase() + action.slice(1)}</h2>
            <div>
                <label>Account ID:</label>
                <input 
                    type="text" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    required 
                    style={inputStyle} 
                />
            </div>
            <div>
                <label>Amount:</label>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    required 
                    style={inputStyle} 
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
            <p>Select the option that you want</p>
                <button 
                    type="button" 
                    onClick={() => setAction('deposit')} 
                    style={action === 'deposit' ? activeActionButtonStyle : buttonStyle}
                >
                    Deposit
                </button>
                <button 
                    type="button" 
                    onClick={() => setAction('withdraw')} 
                    style={action === 'withdraw' ? activeWithdrawButtonStyle : buttonStyle}
                >
                    Withdraw
                </button>
            </div>
            <button type="submit" style={buttonStyle}>Submit</button>
            {message && <p style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>{message}</p>}
        </form>
    );
};

export default DepositWithdraw;
