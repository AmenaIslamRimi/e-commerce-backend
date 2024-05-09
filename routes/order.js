const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getSingleOrder);
router.post("/", orderController.createOrder);

module.exports = router;
