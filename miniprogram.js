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
  const refundTotal = document.querySelector(".refund-total input").value;
  const refundRisk = document.querySelector(".refund-risk input").value;
  const refundCanceled = document.querySelector(".refund-canceled input").value;

  //오늘 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  // 예시: 8/7
  const todayDate = `${month}/${date}`;

  if (!refundTotal || !refundRisk || !refundCanceled) {
    refundSec.innerHTML = "정확한 숫자를 입력해주세요!";
    refundSec.classList.remove("hidden");
  } else {
    refundSec.innerHTML = `@here 🇨🇳  ${todayDate}  <code>KRCN Risk reject</code> 현재 환불진행중
건수는 ${refundTotal}건입니다.
<li><span class="dot">•</span> KRCN Risk reject ${refundRisk}건</li>
<li>
  <span class="dot">•</span> Risk reject - Order canceled by
  recipient ${refundCanceled}건
</li>
이상  환불 안 내 단체 메일 발송 완료`;
  }
  refundSec.classList.remove("hidden");
});
