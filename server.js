import https from "node:https";
import fs from "node:fs";
const options = {
  cert: fs.readFileSync("./ssl/gosynk_me.crt"),
  ca: fs.readFileSync("./ssl/gosynk_me.ca-bundle"),
  key: fs.readFileSync("./ssl/Private.key"),
};

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello, Secure World!");
});

const PORT = 443; // Avoid 443 if not running as root
server.listen(PORT, () => {
  console.log(`HTTPS Server running at https://localhost:${PORT}/`);
});
