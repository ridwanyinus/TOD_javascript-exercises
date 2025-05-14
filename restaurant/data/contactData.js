const infoItem = [
	{ title: "Address", text: "123 Culinary Avenue" },
	{ title: "Phone", text: "(555) 123-4567" },
	{ title: "Email", text: "info@savorydelights.com" },
	{ title: "Hours of Operation" },
];

const formInfo = [
	{ label: "Your Name", type: "text", id: "name", required: true },
	{ label: "Email Address", type: "email", id: "email", required: true },
	{ label: "Phone Number", type: "tel", id: "phone", required: false },
];

const hoursList = [
	{ days: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
	{ days: "Friday - Saturday", time: "11:00 AM - 11:00 PM" },
	{ days: "Sunday", time: "11:00 AM - 9:00 PM" },
];

export {infoItem, formInfo, hoursList}