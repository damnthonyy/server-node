//import modules

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// create an express app
const app = express();

//define url for my page
const __filename = fileURLToPath(import.meta.url); //// get the resolved path to the file
const __dirname = path.dirname(__filename); //get the name of the directory
console.log(__dirname);

//  Define a route to serve the HTML file
app.get('/', (req, res) => {

    // send html files as a response
    res.sendfile(path.join(__dirname, 'page.html'));
});


// start the server

const PORT = 4000; // "4000" // can save also PORT on file.env for security
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`);
});