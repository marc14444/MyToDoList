import userControllers from "../controllers/users.js";
//import admin from "../controllers/admin.js";
import { Router } from "express";
const router = Router();

router.get("/", userControllers.getAll)
router.get("/:id", userControllers.getUser)
router.put("/:id", userControllers.updateUser)
router.post("/", userControllers.createUser)
router.post("/login", userControllers.login)
router.post("/logout", userControllers.logout)
router.delete("/:id", userControllers.deleteUser)


export default router;