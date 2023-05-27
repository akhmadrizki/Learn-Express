const { Router } = require("express");
const CategoryController = require("../controllers/category.controller");

const router = Router();

router.get("/category", CategoryController.index);

router.get("/category/create", CategoryController.create);

router.post("/category", CategoryController.store);

router.get("/category/:id/edit", CategoryController.edit);

router.post("/category/:id/edit", CategoryController.update);

router.post("/category/:id/delete", CategoryController.delete);

module.exports = router;