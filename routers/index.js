const { Router } = require('express');
const shoeRouter = require('./shoe');

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Server connected" });
});

router.use('/shoe', shoeRouter);

module.exports = router;