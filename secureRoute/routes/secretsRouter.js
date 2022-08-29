const express = require("express");
const secretsRouter = express.Router();

secretsRouter.route("/").get((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
    <body>
      The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. 
    </body>
    </html>
  `);
});

module.exports = secretsRouter;
