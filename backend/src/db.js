// connects to remote prisma db and gives ability to query it qith js
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: __dirname + "/schema_prep.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
