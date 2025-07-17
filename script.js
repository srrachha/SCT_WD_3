const questions = [
  {
    question: "Who is considered the father of psychoanalysis?",
    options: ["Carl Jung", "Sigmund Freud", "Jean Piaget", "B.F. Skinner"],
    answer: "Sigmund Freud",
  },
  {
    question: "What is the main focus of behaviorism?",
    options: ["Dreams", "Free will", "Observable behavior", "Unconscious mind"],
    answer: "Observable behavior",
  },
  {
    question: "Which part of the brain processes emotions?",
    options: ["Medulla", "Amygdala", "Frontal Lobe", "Thalamus"],
    answer: "Amygdala",
  },
  {
    question: "Maslow's highest level of needs is:",
    options: ["Esteem", "Love and belonging", "Safety", "Self-actualization"],
    answer: "Self-actualization",
  },
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

function showQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = `Q${currentIndex + 1}. ${current.question}`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => handleAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(button, selected) {
  const correct = questions[currentIndex].answer;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

showQuestion();
