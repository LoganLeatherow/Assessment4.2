const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, list, addGoal, getGoals, deleteItem } = require('./controller')
const {getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/goals", getGoals);
app.delete("api/goals/:id", deleteItem);

app.listen(4000, () => console.log("Server running on 4000"));