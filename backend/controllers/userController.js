import { User } from "../models/userModel.js";

// get all users
export const getUsers = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const userFriends = await User.find({ _id: { $ne: userId } });
    return res.status(200).json(userFriends);
  } catch (error) {
    next(error);
  }
};
