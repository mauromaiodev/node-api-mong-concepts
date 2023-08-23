import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
