import { User } from "../models/userModel.js";
import { createToken } from "../utils/createToken.js";
// import { handleCloudinaryUpload } from "../middlewares/cloudinary.js";
import bcrypt from "bcrypt";

// user registration
export const signup = async (req, res, next) => {
  try {
    const { fullname, username, gender, password, confirmPassword } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      gender,
      password: hashPassword,
      // profilePic: await handleCloudinaryUpload(req.file.buffer),
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (!newUser) {
      return res.status(400).json({ error: "Invalid user data" });
    }

    await newUser.save();

    createToken(newUser._id, res);

    return res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
      message: "Signup successful",
    });
  } catch (error) {
    next(error);
  }
};

// user login
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    createToken(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};

// user logout
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};
