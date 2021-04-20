const { Router } = require('express');
const router = Router();

const { getUsers, addUser, deleteUser } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.post('/users', addUser);
router.delete('/users/', deleteUser)

module.exports = router;