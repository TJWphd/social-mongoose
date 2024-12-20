const router = require("express").Router();
// const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;

// TODO: come back when we have some thoughts!!
