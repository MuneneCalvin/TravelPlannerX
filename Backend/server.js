import express, { urlencoded } from "express";
import config from "./Db/config.js";
import Routes from "./Routes/Routes.js";
import jwt  from "jsonwebtoken";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// JWT Authentication
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

Routes(app);

app.get ("/", (req, res) => {
    res.send("Hello there, welcome to my Monthly project!!!!");
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});