const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();

// import Schema
const contractR = require("../controllers/contractController");

// Methods
/* --> POST Method <-- */
router.post("/", contractR.create);

/* --> GET Method <-- */
router.get("/", contractR.getAll);

router.get("/:id", contractR.get);

/* --> PATCH Method <-- */
router.patch("/:id", contractR.update);

/* --> DELETE Method <-- */
router.delete("/:id", contractR.remove);

module.exports = router;
