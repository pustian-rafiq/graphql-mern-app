const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 6000;

const app = express();

// Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
