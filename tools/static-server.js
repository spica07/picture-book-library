const fs = require("fs");
const http = require("http");
const path = require("path");

const root = process.cwd();
const port = Number(process.argv[2] || process.env.PORT || 4182);
const host = process.env.HOST || "127.0.0.1";

const types = {
  ".css": "text/css;charset=utf-8",
  ".html": "text/html;charset=utf-8",
  ".js": "text/javascript;charset=utf-8",
  ".json": "application/json;charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp"
};

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type || "text/plain;charset=utf-8" });
  res.end(body);
}

http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://local").pathname);
  } catch (err) {
    send(res, 400, "bad request");
    return;
  }

  if (pathname === "/") pathname = "/index.html";

  const file = path.normalize(path.join(root, pathname));
  if (!file.startsWith(root)) {
    send(res, 403, "forbidden");
    return;
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      send(res, 404, "not found");
      return;
    }
    send(res, 200, data, types[path.extname(file).toLowerCase()] || "application/octet-stream");
  });
}).listen(port, host, () => {
  console.log(`Serving ${root} at http://${host}:${port}/`);
});
