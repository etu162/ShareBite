// for authorization
import jwt from "jsonwebtoken";//using the jsonwebtoken library to verify the token

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");//“Hey Express, give me the value of the Authorization header from this request.”

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    //Removing "Bearer " (which is 7 characters). and using trimLeft() just in case there's extra space before the actual token.
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);// if i wanna protect any route we can use this verifytoken function
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};