const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

router.post("/new", function (req, res, next) {
  messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
  res.redirect("/");
});
module.exports = router;
