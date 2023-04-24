const express = require('express');
const os = require("os")
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const { debuglog } = require('util');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.send("HELL");
});

productRouter.route("/1").get((req, res) => {
    res.send("HELL1");
});
app.use("/Products", productRouter)


app.get("/", (req, res) => {

    res.render('index', { username: 'KRUDOIOOOO', costomers: ["DOI1", "DOI2", "DOI3"] });


})

app.listen(PORT, () => {
    //debuglog("Lisening on"+chalk.green(PORT))
    debug("lisening on port" + chalk.red(":" + PORT));
    console.log("Listrning to" + chalk.red(PORT));
})
