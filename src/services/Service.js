import axios from 'axios';

const getUserDetails = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return {error: true, message: error};
        });
};

const getRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos?sort=updated`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return {error: true, message: error};
        });
};

export  { getUserDetails, getRepos };