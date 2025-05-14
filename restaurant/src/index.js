import "../styles/styles.css";
import homePage from "./homePage";

const routes = {
	"home-page": () => import("./homePage").then((module) => module.default),
	"menu-page": () => import("./menuPage").then((module) => module.default),
	"contact-page": () =>
		import("./contactPage").then((module) => module.default),
};

const contentDiv = document.querySelector("#content");
const homePageBtn = document.querySelector("#home-page");
homePageBtn.style.cursor = "default";

const render = (page) => {
	contentDiv.innerHTML = "";
	const newContent = page();
	contentDiv.appendChild(newContent);
};

const navigateTo = async (pageId) => {
	const pageLoader = routes[pageId];
	if (pageLoader) {
		const page = await pageLoader();
		render(page);
		window.history.pushState({ pageId }, "", `#${pageId}`);
	}
};

window.addEventListener("popstate", (event) => {
	if (event.state?.pageId) {
		navigateTo(event.state.pageId);
	}
});

render(homePage);

document.querySelector("nav").addEventListener("click", (e) => {
	const navBtns = Array.from(document.querySelectorAll("nav [id$='-page']"));
	for (const btn of navBtns) {
		btn.classList.remove("active");
		btn.style.cursor = "pointer";
	}

	const page = e.target.id;
	if (!page || !page.endsWith("-page")) return;
	if (routes[page]) {
		navigateTo(page);
	}
	e.target.style.cursor = "default";
	e.target.classList.add("active");
});
