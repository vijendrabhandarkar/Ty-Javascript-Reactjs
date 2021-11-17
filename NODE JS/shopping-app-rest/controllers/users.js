const userModel = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { fname, lname, email, password, role } = req.body;

  try {
    const userExists = await userModel.findOne({ email: email });
    if (userExists) {
      res.status(401).json({
        error: true,
        message: "Email already exists",
        data: null,
      });
    } else {
      const saltRounds = 10;
      //salting
      const salt = await bcrypt.genSalt(saltRounds);
      console.log("salt-------",salt);
      //hashing
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log("hashedPassword-------",hashedPassword);
      await userModel.insertMany([
        {
          fname,
          lname,
          email,
          role,
          password: hashedPassword,
        },
      ]);
      res.status(200).json({
        error: false,
        message: "User registration successfull",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userData = await userModel.findOne({ email }).lean();
    if (userData) {
      const { fname, lname, role } = userData;
      const isPasswordMatch = await bcrypt.compare(password, userData.password);
      if (isPasswordMatch) {
        const payload = {
          fname,
          lname,
          role,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "10h",
        });
        res.status(200).json({
          error: false,
          message: "Login successfull",
          data: {
            fname,
            lname,
            role,
            token
          },
        });
      } else {
        res.status(401).json({
          error: true,
          message: "Invalied Password",
          data: null,
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: "Email doesn't exist, please create account",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
