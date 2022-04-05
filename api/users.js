import express from "express";
import { check, validationResult } from "express-validator";
import gravatar from "gravatar";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import config from "config";

const router = express.Router();

//@route           GET    api/users
//@description     Test route
//@access          Public

router.get("/", (req, res) => res.send("Test users route!"));

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please use a valid email").isEmail(),
    check("password", "the password must contain at least 4 chars").isLength({
      min: 4,
    }),
  ],
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      res.send("Registration successful!");
    }
  }
);

export default router;
