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
