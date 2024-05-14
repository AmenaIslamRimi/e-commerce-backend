const express = require("express");
const router = express.Router();

const subCatagoryController = require("../controllers/subCatagoryController");

router.get("/", subCatagoryController.getAllSubCatagory);
router.get("/:id", subCatagoryController.getSingleSubCatagory);
router.post("/", subCatagoryController.createSubCatagory);
router.patch("/:id", subCatagoryController.updateSubCatagory);
router.delete("/:id", subCatagoryController.deleteSubCatagory);

module.exports = router;
