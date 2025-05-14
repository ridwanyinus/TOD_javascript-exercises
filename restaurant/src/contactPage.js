import { formInfo, hoursList, infoItem } from "../data/contactData";
import pageBanner from "./component/pageBanner";
import "../styles/contact.css";
import createElementWithClass, {
	createFormField,
	createLabel,
	createOptionElement,
	createParagraphTag,
} from "./utils/utils";

function contactInfoSection(contactInfo, infoItem, hoursList) {
	const contactUL = createElementWithClass("ul", "contact__hours-list");

	for (const [idx, element] of infoItem.entries()) {
		const contactInfoItem = createElementWithClass("div", "contact__info-item");
		const title = createElementWithClass("h3", "contact__info-title");
		title.textContent = element.title;

		const contactInfoText = createElementWithClass("p", "contact__info-text");
		contactInfoText.textContent = element.text;

		contactInfoItem.append(title, contactInfoText);

		if (idx === 3) {
			for (const { days, time } of hoursList) {
				const contactList = createElementWithClass("li", "contact__hours-item");
				const span1 = document.createElement("span");
				span1.textContent = days;
				const span2 = document.createElement("span");
				span2.textContent = time;
				contactList.append(span1, span2);
				contactUL.appendChild(contactList);
			}
			contactInfoItem.appendChild(contactUL);
		}
		contactInfo.appendChild(contactInfoItem);
	}

	const contactMap = createElementWithClass("div", "contact__map");
	const mapDiv = document.createElement("div");

	for (const text of [
		"Map Location",
		"Interactive map would be displayed here",
		"(Requires JavaScript or iframe for actual implementation)",
	]) {
		mapDiv.appendChild(createParagraphTag(text));
	}

	contactMap.appendChild(mapDiv);
	contactInfo.appendChild(contactMap);
}
function contactFormSection(contactFormDiv, formInfo) {
	const contactFormTitle = createElementWithClass("h2", "contact__form-title");
	contactFormTitle.textContent = "Send Us a Message";

	const contactForm = createElementWithClass("form", "contact__form");

	for (const { id, label, type, required } of formInfo) {
		const formEl = createFormField(id, label, type, required);
		contactForm.appendChild(formEl);
	}

	const subjectGroup = createElementWithClass("div", "contact__form-group");
	const subjectLabel = createLabel("subject", "Subject");

	const select = createElementWithClass("select", "contact__form-select");
	select.id = "subject";
	select.name = "subject";

	const options = createOptionElement([
		{ value: "general", text: "General Inquiry" },
		{ value: "reservation", text: "Reservation Question" },
		{ value: "feedback", text: "Feedback" },
		{ value: "catering", text: "Catering Services" },
	]);
	select.append(...options);

	subjectGroup.append(subjectLabel, select);

	const messageGroup = createElementWithClass("div", "contact__form-group");
	const messageLabel = createLabel("message", "Your Message");

	const textarea = createElementWithClass("textarea", "contact__form-textarea");
	textarea.id = "message";
	textarea.name = "message";
	textarea.required = true;

	messageGroup.append(messageLabel, textarea);

	const contactSubmitBtn = createElementWithClass(
		"button",
		"contact__form-button",
	);
	contactSubmitBtn.type = "submit";
	contactSubmitBtn.textContent = "Send Message";

	contactForm.append(subjectGroup, messageGroup, contactSubmitBtn);
	contactFormDiv.append(contactFormTitle, contactForm);
}

const contactPage = () => {
	const div = document.createElement("div");
	const banner = pageBanner("Contact Us", "We'd love to hear from you");

	const contactSection = createElementWithClass("section", "contact");
	const contactContainer = createElementWithClass("div", "container");
	contactContainer.classList.add("contact__container");

	const contactInfo = createElementWithClass("div", "contact__info");
	const contactFormDiv = createElementWithClass("div", "contact__form");

	contactInfoSection(contactInfo, infoItem, hoursList);
	contactFormSection(contactFormDiv, formInfo);

	contactContainer.append(contactInfo, contactFormDiv);
	contactSection.append(contactContainer);
	div.append(banner, contactSection);

	return div;
};

export default contactPage;
