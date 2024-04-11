const express = require("express");
const { body ,validationResult} = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const JWT_SECRET = "iamanees$rehman$khan";
var jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/Fetchuser");
router.post("/createUser/",

[
    body("name","Enter a Valid Name").isLength({min:3}),
    body("email","Enter a Valid Email").isEmail(),