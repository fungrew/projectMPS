const express = require('express');
const os = require("os")
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;
app.use(morgan('combined'))

app.get("/",(req,res)=>{

    res.send('Hello Doi');

})

app.listen(port,()=>{
   debug("lisening on port  "+chalk.green(":"+port));
})
