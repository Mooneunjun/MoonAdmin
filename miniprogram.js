const refundPopOpen = document.querySelector(".refund");

const refundPop = document.querySelector(".refund-popup");
const todoPop = document.querySelector(".todo-popup");
const refundPopClose = document.querySelector(".refund-popup .bx-plus");
const todoPopClose = document.querySelector(".todo-popup .bx-plus");
const todoPopOpen = document.querySelector(".todo-list .bx-plus");
const dimlayer = document.querySelector(".dimlayer");

refundPopOpen.addEventListener("click", function () {
  refundPop.showModal();
  refundPop.style.transform = "translate(-50%, -50%) scale(1)";
  dimlayer.classList.remove("hidden");

  refundPop.style.opacity = 1;
  refundPop.style.transform += "scale(1)";
  refundPop.style.left = "50%";
  refundPop.style.top = "50%";
});

refundPop.addEventListener("close", () => {
  refundPop.style.opacity = 0;
  refundPop.style.transform = "translate(-50%, -50%) scale(0.8)";
  dimlayer.classList.add("hidden");
});

todoPopOpen.addEventListener("click", function () {
  todoPop.showModal();
  todoPop.style.transform = "translate(-50%, -50%) scale(1)";
  dimlayer.classList.remove("hidden");

  todoPop.style.opacity = 1;
  todoPop.style.transform += "scale(1)";
  todoPop.style.left = "50%";
  todoPop.style.top = "50%";
});

todoPop.addEventListener("close", () => {
  todoPop.style.opacity = 0;
  todoPop.style.transform = "translate(-50%, -50%) scale(0.8)";
  dimlayer.classList.add("hidden");
});

const refundPopHeader = document.querySelector(".refund-popup .header");
const todoPopHeader = document.querySelector(".todo-popup .header");

var isDragging = false;
var offsetX, offsetY;

refundPopHeader.addEventListener("mousedown", function (e) {
  isDragging = true;
  offsetX = e.clientX - refundPop.getBoundingClientRect().left;
  offsetY = e.clientY - refundPop.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    refundPop.style.transform = "translate(0%, 0%) scale(1)";
    refundPop.style.left = e.clientX - offsetX + "px";
    refundPop.style.top = e.clientY - offsetY + "px";
    refundPop.style.transition = "none";
  }
});

document.addEventListener("mouseup", function (e) {
  isDragging = false;
  refundPop.style.transition = "opacity 0.4s ease , transform 0.4s ease";
});

todoPopHeader.addEventListener("mousedown", function (e) {
  isDragging = true;
  offsetX = e.clientX - todoPop.getBoundingClientRect().left;
  offsetY = e.clientY - todoPop.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    todoPop.style.transform = "translate(0%, 0%) scale(1)";
    todoPop.style.left = e.clientX - offsetX + "px";
    todoPop.style.top = e.clientY - offsetY + "px";
    todoPop.style.transition = "none";
  }
});

document.addEventListener("mouseup", function (e) {
  isDragging = false;
  todoPop.style.transition = "opacity 0.4s ease , transform 0.4s ease";
});

const refundInput = document.querySelector(".refund-button-input");
let refundSec = document.querySelector(".refund-sec");
refundInput.addEventListener("click", function () {
  refundSec.innerHTML = "";
  let refundRisk = document.querySelector(".refund-risk input").value;
  if (refundRisk === "" || refundRisk === "0") {
    refundRisk = 0;
  }
  let refundCanceled = document.querySelector(".refund-canceled input").value;
  if (refundCanceled === "" || refundCanceled === "0") {
    refundCanceled = 0;
  }
  let refundGlobalRisk = document.querySelector(
    ".refund-global-risk input"
  ).value;
  if (refundGlobalRisk === "" || refundGlobalRisk === "0") {
    refundGlobalRisk = 0;
  }

  let refundGlobalCanceled = document.querySelector(
    ".refund-global-canceled input"
  ).value;
  if (refundGlobalCanceled === "" || refundGlobalCanceled === "0") {
    refundGlobalCanceled = 0;
  }

  const refundTotal =
    Number(refundRisk) +
    Number(refundCanceled) +
    Number(refundGlobalRisk) +
    Number(refundGlobalCanceled);

  //오늘 날짜
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  // 예시: 8/7
  const todayDate = `${month}/${date}`;

  refundSec.innerHTML = `@here 🇨🇳  ${todayDate} `;

  refundSec.innerHTML += `<code>KRCN Risk reject</code> `;
  refundSec.innerHTML += ` 현재 환불진행중
건수는 ${refundTotal}건입니다.
<li><span class="dot">• </span>KRCN Risk reject ${refundRisk}건</li>
<li>
  <span class="dot">• </span>Risk reject - Order canceled by recipient ${refundCanceled}건
</li>`;

  if (refundGlobalRisk !== 0) {
    refundSec.innerHTML += `<li>
        <span class="dot">• </span>Global Risk reject ${refundGlobalRisk}건
      </li>`;
  }

  if (refundGlobalCanceled !== 0) {
    refundSec.innerHTML += `<li>
        <span class="dot">• </span>Global Risk reject - Order canceled by recipient ${refundGlobalCanceled}건
      </li>`;
  }
  refundSec.innerHTML += `이상  환불 안 내 단체 메일 발송 완료`;

  const refundButtonOutput = document.querySelector(".refund-button-output");

  refundButtonOutput.disabled = false;
  refundSec.classList.remove("hidden");
});

window.onload = function () {
  var inputs = document.querySelectorAll('input[type="number"]');

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var listItem = input.closest("li");
      var icon = listItem.querySelector("i");

      if (input.value != 0) {
        listItem.classList.remove("not-completed");
        listItem.classList.add("completed");
        icon.classList.remove("bx-x-circle");
        icon.classList.add("bx-check-circle");
      } else {
        listItem.classList.remove("completed");
        listItem.classList.add("not-completed");
        icon.classList.remove("bx-check-circle");
        icon.classList.add("bx-x-circle");
      }
    });
  });

  var button = document.querySelector(".refund-button-output");
  var refundSec = document.querySelector(".refund-sec");

  button.addEventListener("click", function () {
    navigator.clipboard
      .writeText(refundSec.innerText)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        // possibly due to: NOT_ALLOWED_ERR
        console.error("Could not copy text: ", err);
      });
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  var inputs = document.getElementsByClassName("numberInput");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function (e) {
      var value = e.target.value;
      if (value.startsWith("0") && value.length > 1) {
        e.target.value = parseInt(value, 10);
      } else if (value === "" && document.activeElement !== e.target) {
        e.target.value = "0";
      }
    });

    inputs[i].addEventListener("focus", function (e) {
      if (e.target.value === "0") {
        e.target.value = "";
      }
    });

    inputs[i].addEventListener("blur", function (e) {
      if (e.target.value === "") {
        e.target.value = "0";
      }
    });
  }
});
