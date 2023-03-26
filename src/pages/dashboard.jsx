import React from 'react';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const { user, logout, isLoading } = useAuth();
    if (isLoading) return <div>Loading...</div>

    if (user.email === 'nayan@gmail.com') console.log("Okkkk")

    return (
        <div>
            Dashboard
            <br />
            <button onClick={() => logout()}>Logout</button>
            <br /> <br />
            {user.email}
        </div>
    );
};

export default Dashboard;