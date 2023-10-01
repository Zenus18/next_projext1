import Axios from "../lib/axios";
import Swal from "sweetalert2";
const handleLogout = async () => {
  const axios = Axios;
  try {
    const response = await axios.post("/petshop/logout");
    if (
      localStorage.getItem("access_token") != null &&
      localStorage.getItem("token_type")
    ) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("token_type");
    }
    window.location.href = "/login"; // Ganti URL dengan URL halaman login Anda
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Logot Failed",
      text: error.response
        ? error.response.data.message
        : "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    console.error(error);
  }
};
export default handleLogout;
