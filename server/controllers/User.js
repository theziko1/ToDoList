import { User } from "../models/Schema";
import { bcrypt } from "bcrypt";

const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const passHash = await bcrypt(password, 10);
    await User.create({ userName, email, password: passHash });
    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error: "couldn't create user!" });
  }
};

module.exports = signUp;
