const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const UsersModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Users");

// Number of salt rounds for bcrypt
const saltRounds = 10;

app.post("/register", async (req, res) => {
    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        // Replace plain password with hashed password
        req.body.password = hashedPassword;
        const newUser = await UsersModel.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await UsersModel.findOne({ name: name });
        if (user) {
            // Compare hashed password
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
                
            }
        } else {
            res.json("User not found. Please register");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.listen(3001, () => {
    console.log("Server is running!!");
});
