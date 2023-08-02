const express = require("express");
const router = express.Router();

// Static array of users
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Ram" },
  { id: 4, name: "Sam" },
];

//Fetch all users
router.get("/", (req, res) => {
  res.json(users);
});

//Fetch a particular user by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

router.post("/", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(402).json({ message: "User details are not complete" });
  }
  const newUser = { id, name };
  users.push(newUser);
  return res.json(users);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const updateData = req.body;
  user.name = updateData.name;
  return res.json(users);
});

router.delete("/", (req, res) => {
  users = [];
  return res.json(users);
});

module.exports = router;
