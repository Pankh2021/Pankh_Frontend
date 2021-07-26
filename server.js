const express = require("express");
const next = require("next");
const cors = require("cors");
const dev = process.env.NODE_ENV !== "production";

const server = next({ dev });
const handle = server.getRequestHandler();

server.prepare().then(() => {
    const app = express();
    app.use(cors());

    app.get("*", (req, res) => {
        return handle(req, res);
    });
    app.listen(3030, (err) => {
        if(err) throw err
        console.log("server ready");
    });
}).catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
});

