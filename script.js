const questions = [
  {
    question: "HTML stands for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text",
      "Machine Language",
      "None"
    ],
    correct: "Hyper Text Markup Language"
  },

  {
    question: "CSS is used for?",
    answers: [
      "Styling",
      "Programming",
      "Database",
      "Server"
    ],
    correct: "Styling"
  },

  {
    question: "JS is?",
    answers: [
      "Programming Language",
      "Markup",
      "Styling",
      "None"
    ],
    correct: "Programming Language"
  },

  {
    question: "Which is frontend?",
    answers: [
      "HTML",
      "Python",
      "Java",
      "C++"
    ],
    correct: "HTML"
  },

  {
    question: "Which is backend?",
    answers: [
      "Node.js",
      "HTML",
      "CSS",
      "Figma"
    ],
    correct: "Node.js"
  },

  {
    question: "Figma is used for?",
    answers: [
      "UI Design",
      "Coding",
      "Hosting",
      "Testing"
    ],
    correct: "UI Design"
  },

  {
    question: "Tailwind is?",
    answers: [
      "CSS Framework",
      "Language",
      "Library",
      "Tool"
    ],
    correct: "CSS Framework"
  },

  {
    question: "React is?",
    answers: [
      "Library",
      "Database",
      "Language",
      "OS"
    ],
    correct: "Library"
  },

  {
    question: "Bootstrap is?",
    answers: [
      "CSS Framework",
      "Language",
      "DB",
      "IDE"
    ],
    correct: "CSS Framework"
  },

  {
    question: "Which is database?",
    answers: [
      "MongoDB",
      "HTML",
      "CSS",
      "JS"
    ],
    correct: "MongoDB"
  },

  {
    question: "Python is?",
    answers: [
      "Language",
      "Framework",
      "DB",
      "IDE"
    ],
    correct: "Language"
  },

  {
    question: "Git is used for?",
    answers: [
      "Version Control",
      "Styling",
      "Design",
      "Hosting"
    ],
    correct: "Version Control"
  },

  {
    question: "API stands for?",
    answers: [
      "Application Programming Interface",
      "App Code",
      "Program Data",
      "None"
    ],
    correct: "Application Programming Interface"
  },

  {
    question: "Which is mobile OS?",
    answers: [
      "Android",
      "HTML",
      "CSS",
      "Node"
    ],
    correct: "Android"
  },

  {
    question: "UI means?",
    answers: [
      "User Interface",
      "User Input",
      "User Info",
      "None"
    ],
    correct: "User Interface"
  },

  {
    question: "UX means?",
    answers: [
      "User Experience",
      "User Example",
      "User Exit",
      "None"
    ],
    correct: "User Experience"
  },

  {
    question: "Which tool for design?",
    answers: [
      "Figma",
      "VS Code",
      "Chrome",
      "Node"
    ],
    correct: "Figma"
  },

  {
    question: "Which is JS framework?",
    answers: [
      "Next.js",
      "HTML",
      "CSS",
      "SQL"
    ],
    correct: "Next.js"
  },

  {
    question: "Which is styling?",
    answers: [
      "CSS",
      "JS",
      "Python",
      "Java"
    ],
    correct: "CSS"
  },

  {
    question: "Which is markup?",
    answers: [
      "HTML",
      "JS",
      "CSS",
      "Python"
    ],
    correct: "HTML"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const scoreEl = document.getElementById("score");

/* Shuffle Function */
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  reset();

  let q = questions[index];

  questionEl.innerText = q.question;

  progressBar.style.width =
    ((index / questions.length) * 100) + "%";

  // Shuffle answers
  let shuffledAnswers = [...q.answers];
  shuffleArray(shuffledAnswers);

  shuffledAnswers.forEach(answer => {
    let btn = document.createElement("button");

    btn.innerText = answer;

    btn.onclick = () => selectAnswer(answer, q.correct);

    answersEl.appendChild(btn);
  });
}

function reset() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(selected, correct) {

  Array.from(answersEl.children).forEach(btn => {

    if (btn.innerText === correct) {
      btn.style.background = "green";
      btn.style.color = "white";
    } else {
      btn.style.background = "red";
      btn.style.color = "white";
    }

    btn.disabled = true;
  });

  if (selected === correct) {
    score++;
  }

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

  scoreEl.innerText = `Score: ${score}/${questions.length}`;

  progressBar.style.width = "100%";
}

loadQuestion();
