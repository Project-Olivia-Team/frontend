$(document).ready(function () {
  $("#donorForm").submit(function (event) {
    event.preventDefault();
    alert("Pendaftaran Donor Darah berhasil");
    window.location.href = "pendaftaran.html";
  });
});
