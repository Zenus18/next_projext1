import authService from "../services/authServices";
import Swal from "sweetalert2";
export const authMiddleware = (WrappedComponent) => {
  return (props) => {
    // Pemeriksaan apakah pengguna telah login
    if (!authService.isAuthenticated()) {
      return Swal.fire({
        title: "Not Authenticated",
        text: "You Haven't Login yet",
        icon: "warning",
        showConfirmButton: false,
      }).then((window.location.href = "/login"));
    }

    // Pengguna sudah login, render komponen yang diminta
    return <WrappedComponent {...props} />;
  };
};
