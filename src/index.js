import "./styles.css";

function component() {
  const element = document.createElement("p");

  element.textContent = "Hello World Test";

  return element;
}

document.body.appendChild(component());
