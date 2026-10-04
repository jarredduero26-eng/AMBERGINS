function showAnswer(choice) {
  const answers = {
    cidreck: "REALLY?",
    inego: "WEEEE?",
    aruel: "MAYBE..."
  };

  document.getElementById("choices").classList.add("hidden");
  document.querySelector(".question").classList.add("hidden");

  document.getElementById("answerScreen").classList.remove("hidden");

  document.getElementById("answerText").textContent = answers[choice];
}

function goBack() {
  document.getElementById("answerScreen").classList.add("hidden");

  document.getElementById("choices").classList.remove("hidden");
  document.querySelector(".question").classList.remove("hidden");
}

function revealMessage() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}
