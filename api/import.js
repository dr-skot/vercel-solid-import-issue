import fetch from "node-fetch";

const url = "https://google.com";

export default function handler(request, response) {
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      response.statusCode = 200;
      response.end(text);
    })
    .catch((error) => {
      response.statusCode = 500;
      response.end(JSON.stringify({ error }));
    });
}
