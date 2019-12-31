var http = require("http");
http
  .createServer(function(req, res) {
    const { method, url } = req;
    console.log(method);
    console.log(url);
    let body = [];
    req
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(body);
      });
    res.write("Hello World!");
    res.end();
  })
  .listen(8000);
