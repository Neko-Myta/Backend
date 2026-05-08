import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.status(200).json({ message: "Hello, World >_<!" });
});
app.get("/old/path", (_req, res) => {
    res.redirect(301, "/new/path");
});

app.get("/new/path", (_req, res) => {
    res.status(200).json({ message: "This is the new path!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}  \n http://localhost:${PORT}`);
});