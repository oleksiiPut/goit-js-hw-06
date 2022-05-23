const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

function handleInput() {
  const fontSize = refs.input.value;
  refs.text.style.fontSize = `${fontSize}px`;
}

refs.input.addEventListener("input", handleInput);
