const http = require("http");
const fs = require("fs");
const url = require("url");
const events = require("events");
const querystring = require("querystring");

const data1 = fs.readFileSync("./data/data.json");
let projects = JSON.parse(data1);

// console.log(projects.length)

let lastIndex = projects.length === 0 ? 0 : projects[projects.length - 1].id;

//creating server
const server = http.createServer((req, res) => {
  //parsing the url and true for query string
  const urlParse = url.parse(req.url, true);

  //for GET request
  if (urlParse.pathname === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(projects, null, 2));
  }

  if (urlParse.pathname === "/projects" && req.method === "POST") {
    req.on("data", (data) => {
      const jsonData = JSON.parse(data.toString());
      const title = jsonData.title;
      if (title) {
        projects.push({ id: ++lastIndex, title, tasks: [] });

        fs.writeFile("./data/data.json", JSON.stringify(projects), (err) => {
          if (err) {
            const message = { message: "could not get the data" };
            res.writeHead(500, { "Content-Type": "aapplication/json" });
            res.end(JSON.stringify(message, null, 2));
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(projects, null, 2));
          }
        });
      } else {
        const message = { message: "no title in the body" };
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message, null, 2));
      }
    });
  }

  if (urlParse.pathname === "/" && req.method === "POST") {
    // POST logic
  }

  if (urlParse.pathname === "/" && req.method === "PUT") {
    // PUT logic

    req.on("data", (data) => {
      const search = urlParse.search;
      if (search) {
        const [, query] = urlParse.search.split("?");
        const id = querystring.parse(query).id;
        if (id) {
          const jsondata = JSON.parse(data);
          const title = jsondata.title;
          

          if (!title) {
            const message = { message: "no title found in body request!" };

            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify(message, null, 2));
          } else {
            projects.forEach((project, index) => {
              if (project.id == id) {
                projects[index].title = title;
              }
            });
            // The 'writeFile' is an asynchronous function, which makes sense
            // beacuse with the use of a callback function we can manage the //
            // data storage and the server response without blocking all     //
            // server I/O operations with heavy requests!
            fs.writeFile(
              "./data/data.json",
              JSON.stringify(projects),
              (err) => {
                if (err) {
                  const message = { message: "could not persist data!" };
                  res.writeHead(500, { "Content-Type": "application/json" });
                  res.end(JSON.stringify(message, null, 2));
                } else {
                  res.writeHead(200, { "Content-Type": "application/json" });
                  res.end(JSON.stringify(projects, null, 2));
                }
              }
            );
          }
        } else {
          const message = { message: "no id parameter!" };
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify(message, null, 2));
        }
      } else {
        const message = { message: "no query parameter!" };

        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message, null, 2));
      }
    });
  }

  if (urlParse.pathname === "/" && req.method === "DELETE") {
    // DELETE logic

    const search = urlParse.search;
    if (search) {
      const [, query] = urlParse.search.split("?");
      const data = querystring.parse(query);

      projects = projects.filter((project) => project.id != data.id);

      fs.writeFile("./data/data.json", JSON.stringify(projects), (err) => {
        if (err) {
          const message = { message: "could not persist data!" };
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify(message, null, 2));
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(projects, null, 2));
        }
      });
    } else {
      const message = { message: "no query parameter!" };
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message, null, 2));
    }
  }
});

server.listen(5001, () => {
  console.log("server is listening at port no 5001");
})