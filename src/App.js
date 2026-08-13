import express from "express";
import cors from "cors";
import cookiesparser from "cookiesparser";


const App = express();
App.use(cors({
    origin: procees.env.CORS_ORIGIN,
    credentials:true
}));

App.use(express.json({limit: "20kb"}));
App.use(express.urlencoded({ extended: true, limit: "20kb" }));
App.use(express.static("public"));
App.use(cookiesparser());



export {App};
