window.onload = function () {
  let menuBar = document.getElementById("menu-bar");
  let sideNav = document.getElementById("sideNav");
  let container = document.getElementsByClassName("container")[0];
  menuBar.addEventListener("click", function () {
    if (sideNav.classList.contains("open")) {
      sideNav.classList.remove("open");
      container.classList.remove('transl');
    } else {
      sideNav.classList.add("open");
      container.classList.add('transl');
    }
  });
};
