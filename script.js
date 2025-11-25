const btn = document.getElementById("btn");
const output = document.getElementById("output");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

btn.addEventListener("click", async () => {
  const message = textInput.value;
  const delay = Number(delayInput.value);

  await wait(delay);

  output.innerText = message;
});
