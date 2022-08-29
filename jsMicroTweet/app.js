const inputEl = document.querySelector("input");
inputEl.addEventListener('keyup', fixLength);

// Add your event listener here

function fixLength() {
  let textValue = document.querySelector("input").value;
  if (textValue.length > 12) {
    inputEl.value = textValue.slice(0, 12);
  }
}