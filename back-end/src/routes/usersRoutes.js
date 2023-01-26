const express = require("express");
const router = express.Router();

const controller = require("../controllers/useControllers");

router.get("/all", controller.getAll);
router.post("/create", controller.createUser);
router.put('/:id', controller.updateUser);

module.exports = router
