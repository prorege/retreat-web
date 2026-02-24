import { hideAll } from './utils.js';

export function showEmergency() {
  hideAll();
  const el = document.getElementById("emergencyInfo");
  el.innerHTML = `
    <h2>📞 응급 연락망</h2>
    <ul>
      <li>신정민 - <a href="tel:01063958562" class="call-link">전화걸기</a></li>
      <br>
      <li>양세혁 - <a href="tel:01071533922" class="call-link">전화걸기</a></li>
      <br>
      <li>송은석 - <a href="tel:01052715459" class="call-link">전화걸기</a></li>
    </ul>
  `;
  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth" });
}




