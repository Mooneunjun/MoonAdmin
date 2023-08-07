const refund = document.querySelector(".refund");

const refundPop = document.querySelector(".refund-popup");

const refundPopClose = document.querySelector(".refund-popup .bx-plus");

const dimlayer = document.querySelector(".dimlayer");

refund.addEventListener("click", function () {
  refundPop.classList.remove("hidden");
  dimlayer.classList.remove("hidden");
});

refundPopClose.addEventListener("click", function () {
  refundPop.classList.add("hidden");
  dimlayer.classList.add("hidden");
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
<li><span class="dot">•</span> KRCN Risk reject ${refundRisk}건</li>
<li>
  <span class="dot">•</span> Risk reject - Order canceled by recipient ${refundCanceled}건
</li>`;

  if (refundGlobalRisk !== 0) {
    refundSec.innerHTML += `<li>
        <span class="dot">•</span> Global Risk reject ${refundGlobalRisk}건
      </li>`;
  }

  if (refundGlobalCanceled !== 0) {
    refundSec.innerHTML += `<li>
        <span class="dot">•</span> Global Risk reject - Order canceled by recipient ${refundGlobalCanceled}건
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
      } else if (value === "") {
        e.target.value = "0";
      }
    });
  }
});
