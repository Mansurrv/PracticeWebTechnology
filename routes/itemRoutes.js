const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const apiKeyMiddleware = require("../middlewares/authMiddleware");

router.get("/", itemController.getAllItems);
router.get("/:id", itemController.getItemById);

router.post("/", apiKeyMiddleware, itemController.createItem);
router.put("/:id", apiKeyMiddleware, itemController.updateItem);
router.patch("/:id", apiKeyMiddleware, itemController.patchItem);
router.delete("/:id", apiKeyMiddleware, itemController.deleteItem);

module.exports = router;
