export const messages = [
	{ text: "Hi there!", user: "Amando", added: new Date() },
	{ text: "Hello World!", user: "Charles", added: new Date() },
];

const links = [
	{ href: "/", text: "Home" },
	{ href: "/new", text: "New message" },
];

export const getHome = (req, res) => {
	res.render("index", { links, messages });
};

export const getForm = (req, res) => {
	res.render("form", { links });
};

export const postForm = (req, res) => {
	const { user, message } = req.body;

	messages.push({ text: message, user: user, added: new Date() });

	res.redirect("/");
};
