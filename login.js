//컬 스토리지에서 "user" 키와 그에 연결된 값이 삭제됩니다.
localStorage.removeItem("User");
// 'User' 키가 로컬 스토리지에 없는 경우에만 실행
if (!localStorage.getItem("User")) {
  // 사용자 정보 객체 생성
  var users = [
    {
      Id: "chao",
      Password: "chao2023",
      Name: "Chao",
    },
    {
      Id: "moon",
      Password: "moon4657",
      Name: "Moon",
    },
    {
      Id: "admin",
      Password: "admin2023",
      Name: "Admin",
    },
  ];

  // 배열을 JSON 문자열로 변환
  var usersJson = JSON.stringify(users);

  // 로컬 스토리지에 'User' 키로 저장
  localStorage.setItem("User", usersJson);
}

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
  console.log("DOM fully loaded and parsed");
  var form = document.querySelector("#login-form"); // ID를 사용해 form 요소를 찾습니다.

  if (form) {
    // form 요소가 제대로 찾아졌는지 확인합니다.
    console.log("Form found");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // form의 기본 제출 동작을 막습니다.

      var username = document.querySelector(".username-input").value;
      var password = document.querySelector(".password-input").value;
      var submitSec = document.querySelector(".submit-sec p");

      // User 데이터 가져오기
      var users = JSON.parse(localStorage.getItem("User") || "[]");
      var logoName = document.querySelector(".logo-name span");

      // 아이디와 비밀번호가 일치하는 사용자 찾기
      var user = users.find(
        (user) => user.Id === username && user.Password === password
      );

      if (user) {
        console.log("로그인 성공"); // 아이디와 비밀번호가 일치하는 사용자가 있는 경우 로그를 출력합니다.
        logoName.innerText = user.Name;
        document.querySelector(".login-box").classList.add("hidden");
        document.querySelector(".bg-shadow").classList.add("hidden");
        // UserLogin에 로그인 정보 저장
        localStorage.setItem(
          "UserLogin",
          JSON.stringify({
            Id: user.Id,
            Password: user.Password,
            Name: user.Name,
          })
        );
      } else {
        console.log("로그인 실패"); // 아이디와 비밀번호가 일치하는 사용자가 없는 경우 로그를 출력합니다.
        submitSec.innerText = "아이디 또는 비밀번호가 일치하지 않습니다.";
      }
    });
  } else {
    console.log("Form not found"); // form 요소를 찾지 못한 경우 로그를 출력합니다.
  }
});
