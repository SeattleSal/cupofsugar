const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/user"

router
    .route("/")
    .get(postController.findAll)
    .post(postController.create);


// Matches with "/api/posts/:id"
router
    .route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);

    // router.route("/user/:id")
    // .get(postController.findByUser)



module.exports = router;
