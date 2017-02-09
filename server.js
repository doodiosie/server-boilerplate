import express from "express";
import Sequelize from "sequelize";
import bodyParser from "body-parser";

var db = new Sequelize("todos", "root", "root", {
	host: "localhost",
	port: 8889,
	dialect: "mysql"
});

var Todo = db.define("todo", {
	name: Sequelize.STRING,
	completed: Sequelize.BOOLEAN,
});

db.sync({force: true}).then(() => (
	Todo.create({
		name: "Finish App",
		completed: false
	})
));

const PORT = 9000;

var app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello Worldlies");
	res.end();
});

app.get("/todos", (req, res) => {
	Todo.find().then(todos => {
		res.send(todos);
		res.end();
	});
});

app.get("/todos/:_id", (req, res) => {
	Todo.findById(req.params._id).then(todo => {
		res.send(todo);
		res.end();
	});
});

app.post("/todos", (req, res) => {
	Todo.create({
		name: req.body.name,
		completed: req.body.completed
	}).then(todo => {
		res.send(todo);
		res.end();
	});
});

app.listen(PORT);
