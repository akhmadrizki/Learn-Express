const { Router } = require('express');
const ShoeAdminController = require('../controller/admin/shoe.controller');
const ShoeController = require('../controller/api/shoe.controller');

const router = Router();

router.get("/shoe", ShoeAdminController.index);
router.get("/add", ShoeAdminController.add);
router.post("/add", ShoeAdminController.store);
router.get("/about", ShoeAdminController.about);
router.get("/shoe/:id", ShoeAdminController.show);
// router.get("/edit-shoe/:id", ShoeAdminController.edit);

router.get('/api/shoe', ShoeController.index);
router.post('/api/shoe', ShoeController.store);
router.get('/api/shoe/:id', ShoeController.show);
router.put('/api/shoe/:id', ShoeController.update);
router.delete('/api/shoe/:id', ShoeController.destroy);

module.exports = router;