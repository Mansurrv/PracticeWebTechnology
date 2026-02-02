const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");
const apiKeyMiddleware = require("../middlewares/authMiddleware");

router.get("/", controller.getAllItems);
router.get("/:id", controller.getItemById);

router.post("/", apiKeyMiddleware, itemController.createItem);
router.put("/:id", apiKeyMiddleware, itemController.updateItem);
router.patch("/:id", apiKeyMiddleware, itemController.patchItem);
router.delete("/:id", apiKeyMiddleware, itemController.deleteItem);

module.exports = router;
