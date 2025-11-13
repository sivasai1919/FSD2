const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "mySecretKey",   
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }  
}));

app.get("/", (req, res) => {
    if (req.session.username) {
        res.send(`
            <h2>Welcome, ${req.session.username}!</h2>
            <p>Cookie stored: ${req.cookies.username || "none"}</p>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send(`
            <h2>Login Page</h2>
            <form method="POST" action="/login">
                Username: <input type="text" name="username" required><br><br>
                Password: <input type="password" name="password" required><br><br>
                <button type="submit">Login</button>
            </form>
        `);
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

   
    if (username === "Sai" && password === "1234") {
        req.session.username = username;
        res.cookie("username", username);
        res.redirect("/");
    } else {
        res.send("<h3>Invalid username or password!</h3><a href='/'>Try again</a>");
    }
});

app.get("/logout", (req, res) => {
    res.clearCookie("username");
    req.session.destroy(() => {
        res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
