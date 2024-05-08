import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";
// const BASE_URL = "http://157.245.8.187:8000/";

const http = axios.create({ baseURL: BASE_URL });

export default http;
