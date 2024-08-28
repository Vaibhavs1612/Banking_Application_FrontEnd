import React, { useState, useEffect } from 'react';
import { getAllAccounts, deleteAccount } from '../api/AccountApi'; // Fixed the import path

const GetAllAccounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await getAllAccounts();
                setAccounts(response.data);
            } catch (error) {
                console.error('Error fetching accounts:', error);
            }
        };
        fetchAccounts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteAccount(id);
            setAccounts(accounts.filter(account => account.id !== id));
            alert('Account deleted successfully');
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        backgroundColor: 'green',
        color: '#fff',
        padding: '10px',
        textAlign: 'left',
    };

    const tdStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    };

    const trStyle = {
        backgroundColor: '#fff',
    };

    const buttonStyle = {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '14px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>All Accounts</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Balance</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account.id} style={trStyle}>
                            <td style={tdStyle}>{account.id}</td>
                            <td style={tdStyle}>{account.accountHolderName}</td>
                            <td style={tdStyle}>{account.balance.toFixed(2)} Rs</td>
                            <td style={tdStyle}>
                                <button 
                                    style={buttonStyle}
                                    onClick={() => handleDelete(account.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetAllAccounts;
