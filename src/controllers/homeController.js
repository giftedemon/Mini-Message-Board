import { addMessage, getAllMessages } from "../db/queries.js";

export const messages = [
	{ text: "Hi there!", user: "Amando", added: new Date() },
	{ text: "Hello World!", user: "Charles", added: new Date() },
];

const links = [
	{ href: "/", text: "Home" },
	{ href: "/new", text: "New message" },
];

export async function getHome(req, res) {
	const messages = await getAllMessages();

	res.render("index", { links, messages });
}

export const getForm = (req, res) => {
	res.render("form", { links });
};

export async function postForm(req, res) {
	const { username, message } = req.body;

	await addMessage({ text: message, username, added: new Date() });

	// messages.push({ text: message, user: user, added: new Date() });

	res.redirect("/");
}
