const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const checkAdmin = require("../middlewares/userVerify");

const orderController = require("../controllers/orderController");

// verify admin and auth middleware

// router.use(auth);
// router.use(checkAdmin);

router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getSingleOrder);
router.post("/", orderController.createOrder);
router.patch("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
