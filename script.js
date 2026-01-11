const inputs = document.querySelectorAll("select, input[type=number]");
const totalEl = document.getElementById("total");
const summaryEl = document.getElementById("summary");

function calcTotal() {
  let total = 0;
  let summary = [];

  inputs.forEach(el => {
    const price = el.dataset.price;
    if (price && el.value > 0) {
      const label = el.closest("label")?.innerText.split("(")[0];
      total += price * el.value;
      summary.push(`${label.trim()} ${el.value}`);
    }
  });

  summaryEl.innerText = summary.length ? summary.join(" / ") : "선택한 항목이 없습니다.";
  totalEl.innerText = total.toLocaleString() + " 원";
}

inputs.forEach(el => el.addEventListener("change", calcTotal));

function submitForm() {
  if (!agree1.checked || !agree2.checked) {
    alert("필수 동의 항목을 체크해주세요.");
    return;
  }
  alert("예매 신청이 완료되었습니다.\n입금 안내는 기존 공지를 참고해주세요.");
}
