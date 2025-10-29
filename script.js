let currentWords = [];
let currentWord = {};
let enterCount = 0;
let isCorrect = false;

function selectDay() {
  const day = document.getElementById("daySelect").value;
  currentWords = [...vocabulary[day]];
  document.getElementById("input").disabled = false;
  nextWord();
}



function nextWord() {
  if (currentWords.length === 0) {
    document.getElementById("meaning").textContent = "🎉 Bạn đã hoàn thành tất cả từ!";
    document.getElementById("input").value = "";
    document.getElementById("input").disabled = true;
    document.getElementById("result").textContent = "";
    document.getElementById("correctAnswer").textContent = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * currentWords.length);
  currentWord = currentWords[randomIndex];

  document.getElementById("meaning").textContent = currentWord.meaning;
  document.getElementById("input").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("correctAnswer").textContent = "";
  currentWords.splice(randomIndex, 1);

  isCorrect = false;
  enterCount = 0;
}

document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputText = this.value.trim();
    const answerKanji = currentWord.word;

    if (inputText === answerKanji) {
      isCorrect = true;
      document.getElementById("result").textContent = "Correct!";
      document.getElementById("result").style.color = "#4a6644";
      document.getElementById("correctAnswer").textContent = "";

      

      setTimeout(nextWord, 1000);
      setTimeout(() => {
        document.getElementById("result").textContent = "";
      }, 1000);
    } else {
      isCorrect = false;
      // document.getElementById("result").textContent = "Wrong!";
      // document.getElementById("result").style.color = "red";
      document.getElementById("correctAnswer").textContent = `👉 Đáp án đúng: ${currentWord.reading}`;
    }

    this.value = "";
  }
});

window.onload = () => {
  document.getElementById("daySelect").value = "day1";
  selectDay();
};

window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('hamburger');
    var blackBg = document.getElementById('black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};