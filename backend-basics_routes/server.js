import { createServer } from "node:http";

export const server = createServer((request, response) => {
  let myUrl = request.url;

  switch (myUrl) {
    case "/api/fish/1":
      response.statusCode = 200;
      response.end("Shrimp");
      break;

    case "/api/fish/2":
      response.statusCode = 200;
      response.end("Anemonefish");
      break;

    default:
      response.statusCode = 404;
      response.end("Not found");
  }
});
