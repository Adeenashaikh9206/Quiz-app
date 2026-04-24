const questions = [
  { question: "HTML stands for?", answers: ["Hyper Text Markup Language","High Text","Machine Language","None"], correct: 0 },
  { question: "CSS is used for?", answers: ["Styling","Programming","Database","Server"], correct: 0 },
  { question: "JS is?", answers: ["Programming Language","Markup","Styling","None"], correct: 0 },
  { question: "Which is frontend?", answers: ["HTML","Python","Java","C++"], correct: 0 },
  { question: "Which is backend?", answers: ["Node.js","HTML","CSS","Figma"], correct: 0 },
  { question: "Figma is used for?", answers: ["UI Design","Coding","Hosting","Testing"], correct: 0 },
  { question: "Tailwind is?", answers: ["CSS Framework","Language","Library","Tool"], correct: 0 },
  { question: "React is?", answers: ["Library","Database","Language","OS"], correct: 0 },
  { question: "Bootstrap is?", answers: ["CSS Framework","Language","DB","IDE"], correct: 0 },
  { question: "Which is database?", answers: ["MongoDB","HTML","CSS","JS"], correct: 0 },
  { question: "Python is?", answers: ["Language","Framework","DB","IDE"], correct: 0 },
  { question: "Git is used for?", answers: ["Version Control","Styling","Design","Hosting"], correct: 0 },
  { question: "API stands for?", answers: ["Application Programming Interface","App Code","Program Data","None"], correct: 0 },
  { question: "Which is mobile OS?", answers: ["Android","HTML","CSS","Node"], correct: 0 },
  { question: "UI means?", answers: ["User Interface","User Input","User Info","None"], correct: 0 },
  { question: "UX means?", answers: ["User Experience","User Example","User Exit","None"], correct: 0 },
  { question: "Which tool for design?", answers: ["Figma","VS Code","Chrome","Node"], correct: 0 },
  { question: "Which is JS framework?", answers: ["Next.js","HTML","CSS","SQL"], correct: 0 },
  { question: "Which is styling?", answers: ["CSS","JS","Python","Java"], correct: 0 },
  { question: "Which is markup?", answers: ["HTML","JS","CSS","Python"], correct: 0 }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  reset();
  let q = questions[index];
  questionEl.innerText = q.question;

  progressBar.style.width = ((index / questions.length) * 100) + "%";

  q.answers.forEach((ans, i) => {
    let btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => selectAnswer(i);
    answersEl.appendChild(btn);
  });
}

function reset() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(i) {
  let correct = questions[index].correct;

  Array.from(answersEl.children).forEach((btn, idx) => {
    if (idx === correct) btn.style.background = "green";
    else btn.style.background = "red";
    btn.disabled = true;
  });

  if (i === correct) score++;

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.innerText = "Quiz Completed 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.classList.remove("hidden");
  scoreEl.innerText = `Score: ${score}/20`;
  progressBar.style.width = "100%";
}

loadQuestion();