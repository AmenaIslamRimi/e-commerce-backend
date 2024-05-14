const express = require("express");
const router = express.Router();

const catagoryController = require("../controllers/catagoryController");

router.get("/", catagoryController.getAllCatagory);
router.get("/:id", catagoryController.getSingleCatagory);
router.post("/", catagoryController.createCatagory);
router.patch("/:id", catagoryController.updateCatagory);
router.delete("/:id", catagoryController.deleteCatagory);

module.exports = router;
