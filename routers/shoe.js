const { Router } = require('express');
const ShoeController = require('../controller/shoe.controller');

const router = Router();

router.get('/shoe', ShoeController.index);
router.post('/shoe', ShoeController.store);
router.get('/shoe/:id', ShoeController.show);
router.put('/shoe/:id', ShoeController.update);
router.delete('/shoe/:id', ShoeController.destroy);

module.exports = router;