const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");


// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
// user routes
router.use("/user", userRoutes);

module.exports = router;
