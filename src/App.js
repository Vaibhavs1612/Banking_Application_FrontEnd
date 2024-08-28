import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import GetAccount from './components/GetAccount';
import DepositWithdraw from './components/DepositWithdraw';
import GetAllAccounts from './components/GetAllAccounts';
import DeleteAccount from './components/DeleteAccount';

function App() {
    return (
        <Router>
            <div className="App">
                <h1 style={{ paddingLeft: "38%", marginBottom: 80 }}>Banking Application</h1>
                <nav>
                    <ul style={{ listStyle: 'none', padding: '0', textAlign: 'center' }}>
                        <li style={navItemStyle}>
                            <Link to="/create-account" style={linkStyle}>Create Account</Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/get-account" style={linkStyle}>Get Account</Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/deposit-withdraw" style={linkStyle}>Deposit/Withdraw</Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/get-all-accounts" style={linkStyle}>Get All Accounts</Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/delete-account" style={linkStyle}>Delete Account</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/get-account" element={<GetAccount />} />
                    <Route path="/deposit-withdraw" element={<DepositWithdraw />} />
                    <Route path="/get-all-accounts" element={<GetAllAccounts />} />
                    <Route path="/delete-account" element={<DeleteAccount />} />
                    <Route path="/" element={<h2 style={{ textAlign: 'center' }}>Welcome to the Banking Application</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    display: 'block',
    padding: '10px 20px',
};

const navItemStyle = {
    display: 'inline-block',
    margin: '0 10px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    border: '1px solid #0056b3',
    overflow: 'hidden',
};

export default App;
