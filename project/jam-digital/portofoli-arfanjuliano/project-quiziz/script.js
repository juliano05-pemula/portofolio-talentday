const questions = [
  {
    question: "Apa fungsi utama HTML?",
    answers: [
      { text: "Untuk membuat struktur halaman web", correct: true },
      { text: "Untuk menambah animasi", correct: false },
      { text: "Untuk mengatur warna dan layout", correct: false },
      { text: "Untuk menjalankan server", correct: false }
    ]
  },
  {
    question: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
    answers: [
      { text: "background-color", correct: false },
      { text: "font-size", correct: false },
      { text: "color", correct: true },
      { text: "text-align", correct: false }
    ]
  },
  {
    question: "Bahasa pemrograman apa yang dijalankan di browser?",
    answers: [
      { text: "Python", correct: false },
      { text: "PHP", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false }
    ]
  },
  {
    question: "Tag HTML mana yang digunakan untuk menampilkan gambar?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  },
  {
    question: "Di CSS, apa arti selector ‘#’?",
    answers: [
      { text: "Class", correct: false },
      { text: "ID", correct: true },
      { text: "Element", correct: false },
      { text: "Pseudo-class", correct: false }
    ]
  }
];

const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  nextBtn.innerText = "Selanjutnya";
  showQuestion();
}

function showQuestion() {
  resetState();
  const q = questions[currentIndex];
  questionEl.innerText = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
    answerBtns.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answerBtns.innerHTML = "";
}

function selectAnswer(button, correct) {
  const allBtns = answerBtns.querySelectorAll("button");
  allBtns.forEach(btn => (btn.disabled = true));
  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.innerText = `Kamu benar ${score} dari ${questions.length} pertanyaan.`;
}

restartBtn.addEventListener("click", startQuiz);

startQuiz();
6
function selectAnswer(button, correct) {
  const allBtns = answerBtns.querySelectorAll("button");

  // Kunci semua tombol setelah menjawab
  allBtns.forEach(btn => (btn.disabled = true));

  // Jika jawaban user benar
  if (correct) {
    button.classList.add("correct");
    score++;
  } 
  // Jika salah
  else {
    button.classList.add("wrong");

    // Tunjukkan mana jawaban yang benar
    allBtns.forEach(btn => {
      if (questions[currentIndex].answers.find(ans => ans.text === btn.innerText).correct) {
        btn.classList.add("correct");
      }
    });
  }

  nextBtn.style.display = "block";
}
