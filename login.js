async function fetchData(userId) {
  try {
    const response = await fetch("https://moonadmin.mooneunjun.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
      }),
    });
    const data = await response.json();
    // console.log("API Response:", response);
    // console.log("API Data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// window.addEventListener("load", fetchData);

//컬 스토리지에서 "user" 키와 그에 연결된 값이 삭제됩니다.
// localStorage.removeItem("User");
// 'User' 키가 로컬 스토리지에 없는 경우에만 실행
// if (!localStorage.getItem("User")) {
//   // 사용자 정보 객체 생성
//   var users = [
//     {
//       Id: "chao",
//       Password: "chao2023",
//       Name: "Chao",
//       authority: "user",
//     },
//     {
//       Id: "moon",
//       Password: "moon4657",
//       Name: "Moon",
//       authority: "admin",
//     },
//     {
//       Id: "admin",
//       Password: "admin2023",
//       Name: "Admin",
//       authority: "admin",
//     },
//     {
//       Id: "손분일",
//       Password: "sun2023",
//       Name: "손분일",
//       authority: "user",
//     },
//   ];

//   // 배열을 JSON 문자열로 변환
//   var usersJson = JSON.stringify(users);

//   // 로컬 스토리지에 'User' 키로 저장
//   localStorage.setItem("User", usersJson);
// }

if (localStorage.getItem("UserLogin")) {
  var UserLogin = JSON.parse(localStorage.getItem("UserLogin") || "[]");
  var logoName = document.querySelector(".logo-name span");
  setTimeout(() => {
    document.querySelector(".login-box").classList.add("hidden");
    document.querySelector(".bg-shadow").classList.add("hidden");
  }, 1000);
  logoName.innerText = UserLogin.Name;
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
  var form = document.querySelector("#login-form"); // ID를 사용해 form 요소를 찾습니다.

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var username = document.querySelector(".username-input").value;
    var password = document.querySelector(".password-input").value;
    var submitSec = document.querySelector(".submit-sec p");
    var logoName = document.querySelector(".logo-name span");

    const data = await fetchData(username);

    if (data.password === password) {
      console.log("로그인 성공");
      logoName.innerText = data.name;
      document.querySelector(".login-box").classList.add("hidden");
      document.querySelector(".bg-shadow").classList.add("hidden");
      localStorage.setItem("UserLogin", JSON.stringify(data));
      localStorage.setItem("UserLoginToken", JSON.stringify(data.pageId));
    } else {
      console.log("로그인 실패");
      submitSec.innerText = "아이디 또는 비밀번호가 일치하지 않습니다.";
    }
  });
});
