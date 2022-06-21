const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const HOSTNAME = "127.0.0.1";
const PORT = 3031;

app.use(express.json());

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on http://${HOSTNAME}:${PORT}`);
  });
  
app.use(express.static("./Curriculo.html"));

app.post("/editarDados", (req, res) => {
  const infos = req.body;
  db.get(
    `INSERT INTO dbC (nameSkill) VALUES ('${infos.nameSkill}')`,
    (error, response) => {
        if (error) {
          console.log(error)
        }
    }
  );})

  app.get("/pegarDados", (req, res) => {
    const infos = req.body;
    db.get(
      `SELECT FROM dbC (nameSkill) WHERE '${infos.nameSkill}' = nameSkill`,
      (error, response) => {
          if (error) {
            console.log(error)
          }
      }
    );})