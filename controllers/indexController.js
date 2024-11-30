import messages from "../db.js";
const getMessages = (req, res) => {
  res.locals.messages = messages;
  res.render("index", { messages: res.locals.messages });
};

const postMessage = (req, res) => {
  const { text: messageText, user: messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
};
export { getMessages, postMessage };
