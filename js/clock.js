const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const day = document.createElement("span");
const dayOfWeekList = ["일", "월", "화", "수", "목", "금", "토"];

function clockUpdate() {
  const nowTime = new Date();
  const year = String(nowTime.getFullYear());
  const month = String(nowTime.getMonth());
  const dayOfMonth = String(nowTime.getDate());
  const dayOfWeek = dayOfWeekList[nowTime.getDay()]; //요일에 따른 글자 출력

  const hour = String(nowTime.getHours()).padStart(2, 0);
  const minute = String(nowTime.getMinutes()).padStart(2, 0);
  const second = String(nowTime.getSeconds()).padStart(2, 0);

  date.innerText = `${year}, ${month}, ${dayOfMonth}, `;
  date.append(day);
  day.innerText = `${dayOfWeek}`;
  clock.innerText = `${hour} : ${minute} : ${second}`;

  if (dayOfWeek === "일") {
    //일요일은 붉은 색으로 표시
    day.classList.add("holiday");
  }
}

clockUpdate();
setInterval(clockUpdate, 1000);
