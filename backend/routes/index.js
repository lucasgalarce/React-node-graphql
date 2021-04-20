const { Router } = require('express');

const router = Router();

const { getUsers, addUser, deleteUser, editUser } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.post('/users', addUser);
router.put('/users/', editUser);
router.delete('/users/', deleteUser);

module.exports = router;