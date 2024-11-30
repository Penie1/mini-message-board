import messages from "../modals/db.js";
const getMessages = (req, res) => {
  res.locals.messages = messages;
  res.render("index", { messages: res.locals.messages });
};

const createMessage = (req, res) => {
  const { text: messageText, user: messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
};
export { getMessages, createMessage };
