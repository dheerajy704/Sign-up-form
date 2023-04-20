// const express = require('express');
// const router = express.Router();

// const usersConrtoller = require('../controllers/users_controllers');
// router.get('./profile', usersConrtoller.profile);

// module.exports = router;


const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controllers');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.get('/forgot', usersController.forgot);

router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);

module.exports = router;