import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { admintoken } = req.headers;
    if (!admintoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_Decode = jwt.verify(admintoken, process.env.JWT_SECRET);

    if (token_Decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export default authAdmin;
