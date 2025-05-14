import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

function component() {
	const element = document.createElement("div");

	element.innerHTML = "<p>Hello</p>";

	element.classList.add("hello");

	return element;
}

document.body.appendChild(component());
