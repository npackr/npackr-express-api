// Build a server with Node's HTTP module

// Import packages and set the port
import express from 'express';
import bodyParser from "body-parser";

// Import the "routes" module
import routes from "./routes/routes.js";
const port = 3002;
const app = express();

// Set responder to handle requests
routes(app);

// Let the server know that it can handle JSON
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});