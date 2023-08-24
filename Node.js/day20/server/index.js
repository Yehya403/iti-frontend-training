const fs = require("fs/promises");
const path = require("path");

const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const calcAge = require("./modules/calcAge");
const { config } = require("./config");

const app = express();

// Allow json parsing and cors middlewares
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from NODE.js 101 course</h1>");
});

app.post("/users", async (req, res) => {
  const { name, age } = req.body;

  const id = uuidv4();
  const birthYear = calcAge(age);

  // 1. Create a new user from request data
  const user = {
    id,
    name,
    birthYear,
  };

  // 2. Read the users database-like file
  const usersJson = await fs.readFile("./DB/users.json", "utf-8");
  const users = JSON.parse(usersJson);
  users.push(user);

  // 3. Add the new user to permanent users
  try {
    await fs.writeFile(
      path.resolve(__dirname, "./DB/users.json"),
      JSON.stringify(users),
    );
  } catch (error) {
    console.log("error 💥", error);
  }
  res.status(201).json(users);
});

// TODO: create /users GET endpoint to list all users
// CODE HERE

// TODO: create /users/:id GET endpoint to list user by id
// CODE HERE

// Default PORT to listen
app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT} 👋`);
});
