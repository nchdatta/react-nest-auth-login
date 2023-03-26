import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

// define a custom hook for authentication
const useAuth = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(true);

    // handle user login
    const login = useMutation(
        async ({ username, password }) => {
            try {
                const response = await axios.post('http://localhost:5000/auth/login', { username, password });
                return response.data;
            } catch (err) {
                alert("Something error happend.");
            }
        }, {
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            const decodedToken = jwtDecode(data.token);
            setUser(decodedToken);
            queryClient.clear();
            navigate('/dashboard');
        }
    });

    // handle user logout
    const logout = () => {
        // remove the token from local storage
        localStorage.removeItem('token');
        navigate('/login');
        // set the user state to null
        setUser(null);

        // invalidate any existing query data
        queryClient.clear();
    };
    // get the user data from local storage
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            const decodedToken = jwtDecode(storedToken);
            setUser(decodedToken);
            setIsLoading(false);
        }
        setIsLoading(false);
    }, []);

    return { user, login, isLoading, logout };
}

export default useAuth;