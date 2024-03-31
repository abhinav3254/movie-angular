import axios from "axios"


export async function getAllMovies(page, size) {
    try {
        // console.log(`page is ${page} and size is ${size}`);
        let url = 'http://localhost:9091/api/v1/movie';
        if (page !== undefined || size !== undefined) {
            url = url + `?page=${page}&size=${size}`;
        }
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const config = {
            headers: headers
        }

        const response = await axios.get(url, config);
        // console.log(`response from api is ${JSON.stringify(response.data.response)}`);
        return response.data.response;
    } catch (error) {
        // console.log(`error status code is :- ${error.response.status}`);
        // if (error.response.status) {
        //     alert('session expried');
        // }
        console.log(error);
    }
}