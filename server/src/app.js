import express from "express";
import cors from "cors";
import logger from "morgan";
import { config } from "dotenv";
import nodemailer from "nodemailer";
import { body, matchedData, validationResult } from "express-validator";
import helmet from "helmet";
import path from "path";
import __rootDir from "../root.js";
config();

const app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(helmet());
app.use(
  cors({
    origin: ["https://codewitgabi.vercel.app", "http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.set("port", process.env.PORT || 3000);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// send email enpoint

app.post(
  "/email",
  body("email")
    .notEmpty()
    .withMessage("email field is required")
    .escape()
    .isEmail()
    .withMessage("Please enter a valid email address"),
  body("sender").notEmpty().withMessage("sender field is required").escape(),
  body("message").notEmpty().withMessage("message field is required").escape(),
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json(result.mapped());
    }

    const { email, sender, message } = matchedData(req);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio - ${sender}`,
      text: `From: ${email} ${sender}\n${message}`,
      html: `
        <h3>From ${email} ${sender}</h3>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      message: "Email sent successfully",
      statusCode: 200,
    });
  }
);

app.get("/resume", (req, res) => {
  const resume = path.resolve(__rootDir, "public", "assets", "resume.pdf");
  res.status(200).download(resume);
});

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
