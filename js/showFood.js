import { hideAll } from './utils.js';

export function showFood() {
  hideAll();
  const el = document.getElementById("foodInfo");

  const foodData = {
    day1: {
      date: "2월 26일 (목)",
      breakfast: {
        menu: [""],
        wash: ""
      },
      lunch: {
        menu: [""],
        wash: ""
      },
      dinner: {
        menu: ["제육", "고구마 맛탕", "된장국", "쌈", "과일"],
        wash: "미정"
      }
    },
    day2: {
      date: "2월 27일 (금)",
      breakfast: {
        menu: ["미역국", "소시지", "김치"],
        wash: "자율"
      },
      lunch: {
        menu: ["김치볶음밥", "계란프라이", "오뎅국", "과일"],
        wash: "미정"
      },
      dinner: {
        menu: ["찜닭", "김치전", "단무지", "콩나물국", "요구르트", "과일"],
        wash: "미정"
      }
    },
    day3: {
      date: "2월 28일 (토)",
      breakfast: {
        menu: ["빵식"],
        wash: "자율"
      },
      lunch: {
        menu: ["떡만둣국", "김치", "밥", "귤"],
        wash: "미정"
      },
      dinner: {
        menu: ["하계에 만나요~!"],
        wash: ""
      }
    }
  };

  el.innerHTML = `
    <h2 class="schedule-title">🍽 식단표 🍽</h2>
    <div class="schedule-buttons">
      <button class="day-btn" data-day="day1"><h2>1일차<br>(목)</h2></button>
      <button class="day-btn" data-day="day2"><h2>2일차<br>(금)</h2></button>
      <button class="day-btn" data-day="day3"><h2>3일차<br>(토)</h2></button>
    </div>
    <div id="foodCardContainer"></div>
  `;

  const container = document.getElementById("foodCardContainer");

  document.querySelectorAll(".day-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.day;
      const meals = foodData[day];

      container.innerHTML = `
        <div class="schedule-card">
          <h4>${meals.date}</h4>
          <table class="food-table">
            <thead>
              <tr><th>식사</th><th>메뉴</th><th>설거지</th></tr>
            </thead>
            <tbody>
              <tr class="breakfast">
                <td><strong>아침</strong></td>
                <td>${meals.breakfast.menu.join('<br>')}</td>
                <td>${meals.breakfast.wash}</td>
              </tr>
              <tr class="lunch">
                <td><strong>점심</strong></td>
                <td>${meals.lunch.menu.join('<br>')}</td>
                <td>${meals.lunch.wash}</td>
              </tr>
              <tr class="dinner">
                <td><strong>저녁</strong></td>
                <td>${meals.dinner.menu.join('<br>')}</td>
                <td>${meals.dinner.wash}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;

      container.scrollIntoView({ behavior: "smooth" });
    });
  });

  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth" });
}
