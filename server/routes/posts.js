import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import {commentOnPost } from "../controllers/posts.js";
const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);// all post 
router.get("/:userId/posts", verifyToken, getUserPosts); // only user post

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, commentOnPost);
export default router;