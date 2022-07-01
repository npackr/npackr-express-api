# NPACkr Express API

The Report for setting-up Express API on NodeJS

## Tutorial

Step 1: Create a new project

* Create a new project in the terminal by using: `npm init`
* Fill out the prompts for the project name, description, and so on
* When all things are ready, type `yes` to confirm

Step 2: Install dependencies

* Install the dependencies by typing `npm install body-parser express http request`

* Add `type` attribute to the `package.json` file as below to change the default type of the project to `module`

```json
"type": "module"
```

Step 3:

* Create a new file called `index.js` and paste the following code into it:

```js
// Build a server with Node's HTTP module

// Import packages and set the port
import express from 'express';
import bodyParser from "body-parser";
const port = 3002;
const app = express();

// Set responder to handle requests
app.get("/", (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send({message: "Node.js and Express REST API"});
});

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
```

* Create a new file by the path `./routes/routes.js` and paste the following code into `index.js` to import it:

```js
// Import the "routes" module
import routes from "./routes/routes.js";
```

* Move the app listener to the `routes.js` file by theses following code:

```js
// Move the app listener to the `routes.js` file
const router = (app) => {
  app.get("/", (request, response) => {
      response.send({
          message: "Node.js and Express REST API",
      });
  });
};
```

* Export the router function to use it in the `index.js` file as below:

```js
// Export the router
export default router;
```

* Create fake data in the `routes/routes.js` file as below:

```js
// Create fake data
const users = [
  {
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
  },
  {
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
  },
];
```

* Changing the code in the `routes/routes.js` file to respond the fake users info instead by following code:

```js
// Move the app listener to the `routes.js` file
const router = (app) => {
  app.get("/", (request, response) => {
      response.send(users);
  });
};
```

## Result

<img width="720" alt="image" src="https://user-images.githubusercontent.com/24362894/176858318-f275f9ec-4651-430e-86f0-f0014924656b.png">
