// 웹 페이지의 JavaScript 코드

const sideLinks = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)"
);

sideLinks.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", () => {
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");
const navBar = document.querySelector(".content .navbar");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("close");
  navBar.classList.toggle("close");
});

const searchBtn = document.querySelector(
  ".content nav form .form-input button"
);
const searchBtnIcon = document.querySelector(
  ".content nav form .form-input button .bx"
);
const searchForm = document.querySelector(".content nav form");

searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault;
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchBtnIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchBtnIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    sideBar.classList.add("close");
    navBar.classList.add("close");
  } else {
    // sideBar.classList.remove("close");
  }
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let darkMode = JSON.parse(localStorage.getItem("darkMode"));
  const toggler = document.getElementById("theme-toggle");
  const darkModethemeColor = "#181a1e";
  const lightModethemeColor = "#f6f6f9";

  if (darkMode === null) {
    localStorage.setItem("darkMode", false);
    darkMode = false;
    document
      .getElementById("themeColorMetaTag")
      .setAttribute("content", lightModethemeColor);
  }

  if (darkMode) {
    document.body.classList.add("dark");
    toggler.checked = true;
    document
      .getElementById("themeColorMetaTag")
      .setAttribute("content", darkModethemeColor);
  } else {
    document.body.classList.remove("dark");
    toggler.checked = false;
    document
      .getElementById("themeColorMetaTag")
      .setAttribute("content", lightModethemeColor);
  }

  toggler.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark");
      document
        .getElementById("themeColorMetaTag")
        .setAttribute("content", darkModethemeColor);
      localStorage.setItem("darkMode", true);
    } else {
      document.body.classList.remove("dark");
      document
        .getElementById("themeColorMetaTag")
        .setAttribute("content", lightModethemeColor);
      localStorage.setItem("darkMode", false);
    }
  });
});
