import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";//Importing the middleware that checks if the request has a valid JWT token.

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);// go to "/users/:id"
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;