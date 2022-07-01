// Creating fake data
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

// Move the app listener to the `routes.js` file
const router = (app) => {
  app.get("/", (request, response) => {
      response.send(users);
  });
};

// Export the router
export default router;