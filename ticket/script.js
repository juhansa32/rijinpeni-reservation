const inputs = document.querySelectorAll('select, input[type="number"]');
const summary = document.getElementById('summary');
const totalEl = document.getElementById('total');

function updateSummary() {
  let items = [];
  let total = 0;

  inputs.forEach(el => {
    const qty = parseInt(el.value || 0);
    if (qty > 0) {
      const name = el.dataset.name;
      const price = parseInt(el.dataset.price);
      items.push(`${name} x ${qty}`);
      total += price * qty;
    }
  });

  if (items.length === 0) {
    summary.textContent = '선택한 항목이 없습니다.';
  } else {
    summary.textContent = items.join(' / ');
  }

  totalEl.textContent = total.toLocaleString() + ' 원';
}

inputs.forEach(el => el.addEventListener('change', updateSummary));

function submitForm() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const agree1 = document.getElementById('agree1').checked;
  const agree2 = document.getElementById('agree2').checked;

  if (!name || !phone) {
    alert('이름과 휴대폰 번호를 입력해주세요.');
    return;
  }

  if (!agree1 || !agree2) {
    alert('필수 항목에 동의해주세요.');
    return;
  }

  alert(
    `예매 신청이 접수되었습니다.\n\n` +
    `신청자: ${name}\n` +
    `연락처: ${phone}\n\n` +
    `입금 안내는 개별적으로 전달됩니다.`
  );
}
