//atlante Route
const express = require("express");

// import of atlante controller
const atlanteCtrl = require("../controllers/atlantesCtrl");

// call of express router
const router = express.Router();

// routes
router.post("/", atlanteCtrl.createAtlante);
router.get("/", atlanteCtrl.getAllAtlantes);
router.get("/:id", atlanteCtrl.getOneAtlante);
router.put("/:id", atlanteCtrl.modifyAtlante);
router.delete("/:id", atlanteCtrl.deleteAtlante);
router.delete("/", atlanteCtrl.deleteAllAtlantes);

// export of router
module.exports = router;
