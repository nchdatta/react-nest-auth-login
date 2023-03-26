import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { login } = useAuth();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleClick = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        await login.mutateAsync({ username, password });
    }

    if (login.isLoading) return <div>Loading...</div>
    return (
        <div>
            <h1>Login</h1>

            <form >
                <input type="text" ref={usernameRef} required /> <br />
                <input type="password" ref={passwordRef} required /> <br />
                <input type="submit" value="Login" onClick={handleClick} />
            </form>
            <br />
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Login;