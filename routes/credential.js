const express = require("express");
const router = express.Router();

const credentialController = require("../controllers/credentialController");

router.post("/register", credentialController.register);
router.post("/login", credentialController.login);
router.post("/forgot-password", credentialController.forgotPassword);

module.exports = router;
