import createElementWithClass from "../utils/utils";

const menuCategory = (title, itemList) => {
	const category = createElementWithClass("div", "menu__category");
	const categoryTitle = createElementWithClass("h2", "menu__category-title");
	categoryTitle.textContent = title;

	const menuGrid = createElementWithClass("div", "menu__grid");

	function createMenuItem(element) {
		const menuItem = createElementWithClass("div", "menu__item");

		const imageDiv = createElementWithClass("div", "menu__item-image");
		imageDiv.style.backgroundImage = `url(${element.url})`;

		const contentDiv = createElementWithClass("div", "menu__item-content");

		const headerDiv = createElementWithClass("div", "menu__item-header");

		const title = createElementWithClass("h3", "menu__item-title");
		title.textContent = element.title;

		const price = createElementWithClass("span", "menu__item-price");
		price.textContent = element.price;

		headerDiv.appendChild(title);
		headerDiv.appendChild(price);

		const description = createElementWithClass("p", "menu__item-description");
		description.textContent = element.desc;

		const dietaryDiv = createElementWithClass("div", "menu__dietary-info");

		if (element.tag) {
			const dietaryTag = createElementWithClass("span", "menu__dietary-tag");
			dietaryTag.textContent = element.tag;
			dietaryDiv.appendChild(dietaryTag);
		}

		contentDiv.appendChild(headerDiv);
		contentDiv.appendChild(description);
		contentDiv.appendChild(dietaryDiv);

		menuItem.appendChild(imageDiv);
		menuItem.appendChild(contentDiv);

		return menuItem;
	}

	for (const element of itemList) {
		menuGrid.append(createMenuItem(element));
	}

	category.append(categoryTitle, menuGrid);

	return category;
};

export default menuCategory;
