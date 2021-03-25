const router = require("express").Router();
const userController = require("../../controllers/userController");
const authenticateUser = require("../../routes/middleware/authenticateUser");

// Matches with "/api/user"
router.route("/").get(userController.findAll);
router.route("/").post(userController.create);

// Matches with "/api/user/:id"
// router.route("/:id").get(authenticateUser, userController.findById);
router.route("/:id").get(userController.findById);
router.route("/:id").put(userController.update);
router.route("/:id").delete(userController.remove);

module.exports = router;

