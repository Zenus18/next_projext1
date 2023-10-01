import axios from "axios";

// Cek apakah ada token di localStorage
const access_token = localStorage.getItem("access_token") || "";
const token_type = localStorage.getItem("token_type") || "";

const Axios = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Authorization:
      token_type && access_token ? `${token_type} ${access_token}` : "",
  },
});

export default Axios;
