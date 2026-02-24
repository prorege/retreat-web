import { hideAll } from './utils.js';

export function showSchedule() {
  hideAll();
  const el = document.getElementById("scheduleInfo");

  el.innerHTML = `
    <h2 class="schedule-title">📅 일정표 📅</h2>
    <div class="schedule-buttons">
      <button class="day-btn" data-day="day1"><h2>1일차<br>(목)</h2></button>
      <button class="day-btn" data-day="day2"><h2>2일차<br>(금)</h2></button>
      <button class="day-btn" data-day="day3"><h2>3일차<br>(토)</h2></button>
    </div>
    <div id="scheduleCardContainer"></div>
  `;

  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth" });

  // ✅ 날짜를 day별로 분리
  const dates = {
    day1: "2/26(목)",
    day2: "2/27(금)",
    day3: "2/28(토)"
  };

  const scheduleData = {
    day1: [
      { time: "15:00–15:30", title: "접수" },
      { time: "15:30–16:00", title: "강의 전 찬양" },
      { time: "16:00–17:30", title: "특강 1", note: "김영래 목사", type: "special" },
      { time: "17:30–18:00", title: "강의 후 기도회" },
      { time: "18:00–19:30", title: "저녁식사", note: "조별 모임" },
      { time: "19:30–22:00", title: "목요 기도회" },
      { time: "22:00–23:00", title: "OT & 찬양의 밤" },
      { time: "23:00~",       title: "취침" }
    ],
    day2: [
      { time: "05:00–06:30", title: "새벽 기도" },
      { time: "06:30–08:30", title: "세면 및 아침 식사" },
      { time: "08:30–11:30", title: "성경통독" },
      { time: "11:30–13:30", title: "점심 식사", note: "조별 모임" },
      { time: "13:30–15:30", title: "AI 전도 컨텐츠 제작" },
      { time: "15:30–16:00", title: "강의 전 찬양" },
      { time: "16:00–17:30", title: "강의", type: "lecture" },
      { time: "17:30–18:00", title: "강의 후 기도회" },
      { time: "18:00–19:30", title: "저녁 식사", note: "조별 모임" },
      { time: "19:30–22:00", title: "금요 기도회" },
      { time: "22:00–23:00", title: "찬양의 밤" },
      { time: "23:00~",       title: "취침" }
    ],
    day3: [
      { time: "05:00–06:30", title: "새벽 기도" },
      { time: "06:30–08:30", title: "세면 및 아침 식사" },
      { time: "08:30–10:00", title: "성경통독" },
      { time: "10:00–10:30", title: "강의 전 찬양" },
      { time: "10:30–12:00", title: "특강 2", note: "김요환 목사", type: "special" },
      { time: "12:00–12:30", title: "결단문 및 단체사진" },
      { time: "12:30–14:00", title: "점심 식사" },
      { time: "14:00–",       title: "청소" }
    ]
  };

  const container = document.getElementById("scheduleCardContainer");

  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const day = btn.dataset.day;
      const data = scheduleData[day];

      container.innerHTML = `
        <div class="schedule-card">
          <!-- 날짜를 표 위에 표시 -->
          <h3 class="schedule-date">📌 ${dates[day]}</h3>
          <table>
            <thead><tr><th>시간</th><th>내용</th><th>비고</th></tr></thead>
            <tbody>
              ${data.map(item => `
                <tr class="${item.type || ''}">
                  <td>${item.time}</td>
                  <td>${item.title}</td>
                  <td>${item.note || ''}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
      container.scrollIntoView({ behavior: "smooth" });
    });
  });
}
