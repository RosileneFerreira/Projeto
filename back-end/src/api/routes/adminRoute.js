const express = require('express');
const adminController = require('../controllers/admin.controller');
const { validateEmail } = require('../middlewares/validateEmail');
const { validateName } = require('../middlewares/validateName');
const { validatePassword } = require('../middlewares/validatePassword');

const router = express.Router();

router.post('/', validateEmail, validateName, validatePassword, adminController.createUserByAdmin);

module.exports = router;