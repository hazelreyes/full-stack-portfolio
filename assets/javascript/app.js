$(document).ready(function() {
  const sideNav = document.querySelector(".sidenav");
  M.Sidenav.init(sideNav, {});

  function displayModal1() {
    $("#modal1").modal();
    $("#modal1").modal("open");
  }
  function displayModal2() {
    $("#modal2").modal();
    $("#modal2").modal("open");
  }
  function displayModal3() {
    $("#modal3").modal();
    $("#modal3").modal("open");
  }
  function displayModal4() {
    $("#modal4").modal();
    $("#modal4").modal("open");
  }
  function displayModal5() {
    $("#modal5").modal();
    $("#modal5").modal("open");
  }
  function displayModal6() {
    $("#modal6").modal();
    $("#modal6").modal("open");
  }
  function displayModal7() {
    $("#modal7").modal();
    $("#modal7").modal("open");
  }
  function displayModal8() {
    $("#modal8").modal();
    $("#modal8").modal("open");
  }
  function displayModal9() {
    $("#modal9").modal();
    $("#modal9").modal("open");
  }

  $(document).on("click", ".project1", displayModal1);
  $(document).on("click", ".project2", displayModal2);
  $(document).on("click", ".project3", displayModal3);
  $(document).on("click", ".project4", displayModal4);
  $(document).on("click", ".project5", displayModal5);
  $(document).on("click", ".project6", displayModal6);
  $(document).on("click", ".project7", displayModal7);
  $(document).on("click", ".project8", displayModal8);
  $(document).on("click", ".project9", displayModal9);
});
