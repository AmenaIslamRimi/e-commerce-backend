const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getSingleProduct);
router.post("/", productController.createProduct);

module.exports = router;
