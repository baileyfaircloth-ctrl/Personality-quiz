console.log("script.js connected!");
const questionBlocks = document.querySelectorAll('.question-block');
let userAnswers = {};

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear previous selection
      buttons.forEach(b => b.classList.remove('selected'));
      // Highlight this one
      btn.classList.add('selected');
      // Save answer
      userAnswers[index] = btn.dataset.value;
      console.log(userAnswers);
    });
  });
});
function displayResult() {
  let counts = { explorer: 0, artist: 0, leader: 0, thinker: 0 };

  Object.values(userAnswers).forEach(value => {
    counts[value] = (counts[value] || 0) + 1;
  });

  let topCategory = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  const resultContainer = document.getElementById('result-container');
  resultContainer.textContent = `You are a ${topCategory.toUpperCase()}! 🎉`;
}

document
  .getElementById('result-btn')
  .addEventListener('click', displayResult);

