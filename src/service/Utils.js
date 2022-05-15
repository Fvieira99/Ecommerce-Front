import Swal from "sweetalert2";

export function showErrorAlert(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message
  });
}

export function showSuccessAlert(message) {
  const swal = Swal.fire({
    icon: "success",
    title: "Thank You",
    text: message
  });
  return swal;
}
