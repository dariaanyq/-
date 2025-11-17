let userName = prompt("Введіть ваше ім’я:");
if (!userName || userName.trim().length < 2) {
  userName = "Гравець";
}
document.getElementById("userName").textContent = userName;

let userWins = 0;
let compWins = 0;

function playRound() {
  if (userWins >= 3 || compWins >= 3) return;

  const userNum = Math.floor(Math.random() * 10) + 1;
  const compNum = Math.floor(Math.random() * 10) + 1;

  document.getElementById("userNumber").textContent = userNum;
  document.getElementById("compNumber").textContent = compNum;

  const status = document.getElementById("status");
  status.classList.remove("win");

  if (userNum > compNum) {
    userWins++;
    status.textContent = `${userName} отримує бал!`;
    status.classList.add("win");
  } else if (compNum > userNum) {
    compWins++;
    status.textContent = `Комп’ютер отримує бал!`;
  } else {
    status.textContent = `Нічия!`;
  }

  document.getElementById("userScore").textContent = userWins;
  document.getElementById("compScore").textContent = compWins;

  if (userWins === 3 || compWins === 3) {
    status.textContent = userWins === 3
      ? `${userName} переміг у грі! `
      : `Комп’ютер переміг у грі! `;
    status.classList.add("win");
  }
}