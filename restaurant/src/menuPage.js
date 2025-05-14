import { appetizers, beverages, courses, desserts } from "../data/menuData";
import menuCategory from "./component/menuCategory";
import pageBanner from "./component/pageBanner";
import createElementWithClass from "./utils/utils";
import "../styles/menu.css";
const menuPage = () => {
	const container = document.createElement("div");
	const banner = pageBanner(
		"Our Menu",
		"Crafted with passion, served with pride",
	);
	const appetizersCategory = menuCategory("Appetizers", appetizers);
	const courseCategory = menuCategory("Main Courses", courses);
	const dessertsCategory = menuCategory("Desserts", desserts);
	const beveragesCategory = menuCategory("Beverages", beverages);

	const menuSection = createElementWithClass("section", "menu");
	const menuContainer = createElementWithClass("div", "container");
	menuSection.appendChild(menuContainer);
	menuContainer.append(
		appetizersCategory,
		courseCategory,
		dessertsCategory,
		beveragesCategory,
	);

	container.append(banner, menuSection);
	return container;
};

export default menuPage;
