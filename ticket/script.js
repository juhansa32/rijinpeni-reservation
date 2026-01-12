const inputs = document.querySelectorAll("select, input[type='number']");
const summary = document.getElementById("summary");
const totalEl = document.getElementById("total");

inputs.forEach(el => el.addEventListener("change", update));

function update() {
  let total = 0;
  let lines = [];

  inputs.forEach(el => {
    const qty = Number(el.value);
    if (!qty) return;

    const price = Number(el.dataset.price);
    const name = el.dataset.name;
    total += qty * price;
    lines.push(`${name} x ${qty}`);
  });

  summary.textContent = lines.length ? lines.join("\n") : "선택한 항목이 없습니다.";
  totalEl.textContent = total.toLocaleString() + " 원";
}

function submitForm() {
  if (!agree1.checked || !agree2.checked) {
    alert("필수 동의 항목을 확인해주세요.");
    return;
  }
  alert("예매 신청이 접수되었습니다.\n입금 안내 문자를 기다려주세요.");
}

/* 이미지 클릭 확대 */
document.querySelectorAll(".goods img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("modalImg").src = img.src;
    document.getElementById("imgModal").style.display = "flex";
  });
});

document.getElementById("imgModal").onclick = () => {
  document.getElementById("imgModal").style.display = "none";
};
