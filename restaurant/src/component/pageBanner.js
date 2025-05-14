import createElementWithClass from "../utils/utils";

const pageBanner = (title, subtitle) => {
	const bannerSection = createElementWithClass("section", "page-banner");
	const bannerContainer = createElementWithClass("div", "container");

	const h1 = document.createElement("h1", "page-banner__title");
	h1.textContent = title;

	const p = createElementWithClass("p", "page-banner__subtitle");
	p.textContent = subtitle;

	bannerContainer.append(h1, p);

	bannerSection.appendChild(bannerContainer);
	return bannerSection;
};

export default pageBanner;
