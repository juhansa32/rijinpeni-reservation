function formatNumber(num) {
  return num.toLocaleString("ko-KR");
}

function updateSummary() {
  const items = document.querySelectorAll(
    "select[data-price], input[data-price]"
  );

  let summary = [];
  let total = 0;

  items.forEach((item) => {
    let qty = parseInt(item.value) || 0;
    let price = parseInt(item.dataset.price);

    if (qty > 0) {
      let labelText = item.closest("label")
        ? item.closest("label").innerText.split("(")[0].trim()
        : "상품";

      summary.push(`${labelText} x ${qty}`);
      total += qty * price;
    }
  });

  const summaryEl = document.getElementById("summary");
  const totalEl = document.getElementById("total");

  if (summary.length === 0) {
    summaryEl.innerText = "선택한 항목이 없습니다.";
    totalEl.innerText = "0 원";
  } else {
    summaryEl.innerText = summary.join("\n");
    totalEl.innerText = `${formatNumber(total)} 원`;
  }
}

function submitForm() {
  const name = document.querySelector('input[type="text"]').value.trim();
  const phone = document.querySelector('input[type="tel"]').value.trim();
  const agree1 = document.getElementById("agree1").checked;
  const agree2 = document.getElementById("agree2").checked;

  if (!name || !phone) {
    alert("신청자 정보를 모두 입력해 주세요.");
    return;
  }

  if (!agree1 || !agree2) {
    alert("필수 동의 항목에 모두 체크해 주세요.");
    return;
  }

  alert(
    "예매 신청이 접수되었습니다.\n\n입금 안내는 예매 마감 후 문자로 발송될 예정입니다."
  );
}

// 이벤트 연결
document.querySelectorAll(
  "select[data-price], input[data-price]"
).forEach((el) => {
  el.addEventListener("change", updateSummary);
  el.addEventListener("input", updateSummary);
});
