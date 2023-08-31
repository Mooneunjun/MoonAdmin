async function fetchData(userId) {
  try {
    const response = await fetch(
      "https://moonadminusers.mooneunjun.workers.dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
        }),
      }
    );

    if (response.status === 404) {
      console.log("User not found");
      // 로그인 실패 메시지를 화면에 표시하는 로직 추가
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

if (localStorage.getItem("UserLogin")) {
  var UserLogin = JSON.parse(localStorage.getItem("UserLogin") || "[]");
  var logoName = document.querySelector(".logo-name span");
  setTimeout(() => {
    document.querySelector(".login-box").classList.add("hidden");
    document.querySelector(".bg-shadow").classList.add("hidden");
  }, 1000);
  logoName.innerText = UserLogin.name;
} else {
  document.querySelector(".login-box").classList.remove("hidden");
  document.querySelector(".bg-shadow").classList.remove("hidden");
}

const logout = document.querySelector(".logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("UserLogin");
  location.reload();
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#login-form");
  var submitSec = document.querySelector(".submit-sec p");
  var logoName = document.querySelector(".logo-name span");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var userId = document.querySelector(".userid-input").value;
    var password = document.querySelector(".password-input").value;

    const data = await fetchData(userId);

    if (!data) {
      submitSec.innerText = "아이디가 존재하지 않습니다.";
      return;
    }

    if (data.password === password) {
      console.log("로그인 성공");
      logoName.innerText = data.name;
      document.querySelector(".login-box").classList.add("hidden");
      document.querySelector(".bg-shadow").classList.add("hidden");
      localStorage.setItem("UserLogin", JSON.stringify(data));
      localStorage.setItem("UserLoginToken", JSON.stringify(data.pageId));
    } else {
      console.log("로그인 실패");
      submitSec.innerText = "비밀번호가 일치하지 않습니다.";
    }
  });
});
