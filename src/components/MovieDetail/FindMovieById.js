import axios from "axios";

export async function findById(id) {
    try {
        let url = `http://localhost:9091/api/v1/movie/${id}`;
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        const config = {
            headers: headers
        }
        const response = await axios.get(url, config);
        // console.log(response.data.response);
        return response.data.response;
    } catch (error) { console.log(error); }
}