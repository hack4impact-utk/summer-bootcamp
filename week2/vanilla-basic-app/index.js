let text = '';

const textInput = document.getElementById('text-input');
const textEl = document.getElementById('text');

textInput.addEventListener('input', (event) => {
  text = event.target.value;
  renderText();
});

function renderText() {
  textEl.innerText = text;
}
