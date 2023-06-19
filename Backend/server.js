import express, { urlencoded } from "express";
import config from "./Db/config.js";
import Routes from "./Routes/Routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

Routes(app);

app.get ("/", (req, res) => {
    res.send("Hello there, welcome to my Monthly project!!!!");
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});