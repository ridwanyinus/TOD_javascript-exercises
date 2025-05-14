import createElementWithClass, { createParagraphTag } from "./utils/utils";

const homePage = () => {
	const aboutParagraphTexts = [
		"Welcome to Savory Delights, where passion meets plate. Our restaurant has been serving the community with exceptional dining experiences since 2005.",
		"Our award-winning chefs craft each dish with locally-sourced ingredients, ensuring that every bite is as fresh as it is flavorful. From traditional favorites to innovative creations, our menu offers something for everyone",
		"We believe that great food brings people together. That's why we've created a warm, inviting atmosphere where friends and family can gather to share not just a meal, but moments that matter.>",
	];

	const featuresItem = [
		{
			icon: "👨‍🍳",
			text: "Master Chefs",
			subText: "Culinary experts with years of experience",
		},
		{ icon: "🕒", text: "Hours", subText: "Mon-Sun: 11am - 10pm" },
		{ icon: "📍", text: "Location", subText: "123 Culinary Ave, Foodville" },
		{
			icon: "📞",
			text: "Reservations",
			subText: "(555) 123-4567",
		},
	];

	const container = document.createElement("div");
	const heroSection = createElementWithClass("section", "hero");
	const heroContentDiv = createElementWithClass("div", "hero-content");
	const h1 = document.createElement("h1");
	h1.textContent = "Experience Culinary Excellence";

	const p = createParagraphTag(
		"Where every flavor tells a story and every meal becomes a memory. ",
	);

	const btn = document.createElement("a");
	btn.textContent = "Reserve a Table";
	btn.href = "#";
	btn.classList.add("btn");

	heroContentDiv.append(h1, p, btn);
	heroSection.appendChild(heroContentDiv);

	const aboutSection = createElementWithClass("section", "about");
	const aboutContainerDiv = createElementWithClass("div", "container");
	const aboutHeading = document.createElement("h2");
	aboutSection.appendChild(aboutContainerDiv);
	aboutHeading.textContent = "Our Restaurant";
	const aboutContent = createElementWithClass("div", "about-content");
	const aboutText = createElementWithClass("div", "about-text");

	const paraFragment = document.createDocumentFragment();
	for (const text of aboutParagraphTexts) {
		const p = createParagraphTag(text);
		paraFragment.append(p);
	}

	aboutText.append(paraFragment);
	aboutContainerDiv.append(aboutHeading, aboutContent);

	const aboutFeatures = createElementWithClass("div", "features");
	const fragment = document.createDocumentFragment();
	for (const {icon, text, subText} of featuresItem) {
		const featureCard = document.createElement("div");
		featureCard.classList.add("feature-card");

		const featureIcon = document.createElement("div");
		featureIcon.classList.add("feature-icon");
		featureIcon.textContent = icon;

		const h3 = document.createElement("h3");
		h3.textContent = text;

		const p = createParagraphTag(subText);

		featureCard.append(featureIcon, h3, p);
		fragment.appendChild(featureCard);
	}
	aboutFeatures.appendChild(fragment);
	aboutContent.append(aboutText, aboutFeatures);
	container.append(heroSection, aboutSection);

	return container;
};

export default homePage;
