import authService from "../services/authServices";
import Swal from "sweetalert2";
export const loginMiddleware = (WrappedComponent) => {
  return (props) => {
    // Pemeriksaan apakah pengguna telah login
    if (authService.isAuthenticated()) {
      return Swal.fire({
        title: "Login success",
        text: "You Have been logged in",
        icon: "success",
        showConfirmButton: false,
      }).then((window.location.href = "/"));
    }

    // Pengguna sudah login, render komponen yang diminta
    return <WrappedComponent {...props} />;
  };
};
