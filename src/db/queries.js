import pool from "./pool.js";

export async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages;");
	return rows;
}

export async function addMessage({ text, username, added }) {
	await pool.query(
		"INSERT INTO messages (message, username, date) VALUES ($1, $2, $3);",
		[text, username, added],
	);
}
