import { hideAll } from './utils.js';

export function showResolution() {
  hideAll();
  const el = document.getElementById("resolutionInfo");

  el.innerHTML = `
    <div class="resolution-card">
      <h2>✍️결단문✍️</h2>
      <p class="resolution-text">
        나는 하나님 앞에서 <br>
        <strong>선한 일에 준비된 청년</strong>이 되기로 결단하며,<br />
        이번 수련회 기간 이후 <span class="highlight"><br>
        그리스도의 심장</span>으로 <span class="highlight">선한 일에 준비</span>되어
        <br>하나님께 영광 돌리겠습니다.
      </p>
      <p class="resolution-verse" style="font-size:0.9em; color:var(--color-text-muted, #666); margin-top:10px;">
        — 디모데후서 2:20~22 —
      </p>
      <a href="https://forms.gle/zpDwgjaU1YeXiR22A" target="_blank" class="resolution-btn">
        🙏 결단문 작성하기
      </a>
    </div>
  `;
  
  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth" });
}
