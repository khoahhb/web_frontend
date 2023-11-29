import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:4000/v1/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const signIn = async (username, password) => {
    const response = await api.post('/auth/signin', { username, password });
    return response.data;
};

const signOut = async (token) => {
    const response = await api.post('/auth/signout', {}, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.data;
};

const signUp = async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
};

const createUser = async (token, userData) => {
    const response = await api.post('/user', userData, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.data;
};

const getUserData = async (token) => {
    const response = await api.post('/auth', {}, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.data;
};

export { signIn, signOut, signUp, getUserData, createUser };
