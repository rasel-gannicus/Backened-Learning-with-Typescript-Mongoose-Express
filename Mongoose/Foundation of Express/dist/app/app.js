"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
// --------------------------------------------- Middleware
const logger = (req, res, next) => {
    // console.log(req.url, req.method, req.hostname);
    next();
};
// --------------------------------------------- router starts
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1', courseRouter);
userRouter.get("/createUser", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created Successfully",
        data: user
    });
});
courseRouter.post('/course/createCourse', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'Course has been created !',
        data: course
    });
});
// --------------------------------------------- router ends
app.get('/', logger, (req, res) => {
    res.send('Hello Coders !');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('Successfully received data');
});
exports.default = app;
