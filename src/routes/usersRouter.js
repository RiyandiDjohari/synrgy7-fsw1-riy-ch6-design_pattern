const router = require("express").Router();
const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
} = require("../controller/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
