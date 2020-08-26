import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://cors-anywhere.herokuapp.com/https://wunderlist-bw820.herokuapp.com/'
    });
};