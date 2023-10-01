import Axios from "../lib/axios";
import Swal from "sweetalert2";
import authService from "../services/authServices";

async function loginController(postData) {
  const axios = Axios;

  try {
    const response = await axios.post("/petshop/login", postData);
    const { access_token, token_type } = response.data;
    authService.setAuthTokens(access_token, token_type);

    // Redirect setelah login berhasil
    window.location.href = "/";
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.response
        ? error.response.data.message
        : "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    console.error(error);
  }
}

export default loginController;
