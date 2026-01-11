const inputs = document.querySelectorAll("select, input[type=number]");
const totalEl = document.getElementById("total");

function calc() {
  let total = 0;
  inputs.forEach(i => {
    const price = i.dataset.price;
    if (price) total += price * i.value;
  });
  totalEl.innerText = total.toLocaleString() + " 원";
}

inputs.forEach(i => i.addEventListener("change", calc));

function submitForm() {
  alert("예매 신청이 완료되었습니다.\n입금 안내는 기존 공지를 참고해주세요.");
}
