export default function createElementWithClass(tag, className) {
	const el = document.createElement(tag);
	el.classList.add(className);
	return el;
}

const createLabel = (id, text) => {
	const labelEl = createElementWithClass("label", "contact__form-label");
	labelEl.setAttribute("for", id);
	labelEl.textContent = text;
	return labelEl;
};

const createFormField = (id, label, type, required = false) => {
	const group = createElementWithClass("div", "contact__form-group");
	const labelEl = createLabel(id, label);

	const input = createElementWithClass("input", "contact__form-input");
	input.type = type;
	input.id = id;
	input.name = id;
	input.required = required;

	group.append(labelEl, input);
	return group;
};

const createOptionElement = (options) => {
	return options.map(({ value, text }) => {
		const option = document.createElement("option");
		option.value = value;
		option.textContent = text;
		return option;
	});
};

const createParagraphTag = (text) => {
	const p = document.createElement("p");
	p.textContent = text;
	return p;
};

export {
	createFormField,
	createLabel,
	createOptionElement,
	createParagraphTag,
};
