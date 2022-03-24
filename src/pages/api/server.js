const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(() => {
    // Slug on url
    server.get("/companies/:companyId", (req, res) => {
      console.log(req.params.cid);
      return app.render(req, res, "/post", { companyId: req.params.cid });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("> Ready on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
