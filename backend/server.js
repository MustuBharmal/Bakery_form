const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongooes = require("mongoose");

const port = process.env.PORT || 5000;
const DBCONNECTION =
  "mongodb+srv://mustafabharmal10:mustafabharmal10@cluster0.fkm4fto.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  session({
    secret: "keyborad cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  res.send("I am working great!! :)");
});

const myForm = require("./routers/contactForm");
app.use("/contact-form", myForm);

mongooes
  .connect(DBCONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));