const server = require("./server");

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
