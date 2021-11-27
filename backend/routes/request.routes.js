const express = require('express');
const RequestController = require('../controller/request.controller');
const router = express.Router();

router.post('/', RequestController.create);
router.get('/', RequestController.getAllRequest);
router.get('/:id', RequestController.getRequestById);
router.put('/:id', RequestController.updateRequest);
router.delete('/:id', RequestController.deleteRequest);

module.exports = router;
