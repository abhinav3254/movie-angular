import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:9091/api/v1/auth/";

export async function makeLoginCall(data) {
    const url = BASE_URL + 'login';
    const res = {
        status: '',
        message: ''
    }
    try {
        const response = await axios.post(url, data);
        res.status = response.status;
        res.message = 'Login Successfully'
        localStorage.setItem("token", response.data.response);
    } catch (error) {
        res.status = error.response.status;
        res.message = error.response.data.message;
    }
    return res;
}
