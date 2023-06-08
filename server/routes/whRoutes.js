const express = require('express');
const router = express.Router();

const whController = require('../controllers/whController');
/**
 * App Routes
 */
router.get('/', whController.homepage);
router.get('/register-user', whController.registerUser);
router.get('/login-user', whController.loginUser);
router.get('/submit-inv', whController.submitInv);
router.get('/dashboard', whController.dashboard);

router.get('/vegetables', whController.vegetableStorage);
router.get('/poultry', whController.poultryStorage);
router.get('/legume', whController.legumeStorage);
router.get('/grains', whController.grainStorage);
router.get('/fruit', whController.fruitStorage);

router.get('/rajasthan', whController.rajasthanStats);
router.get('/up', whController.upStats);
router.get('/punjab', whController.punjabStats);
router.get('/maharashtra', whController.maharashtraStats);
router.get('/gujrat', whController.gujratStats);

router.get('/categories', whController.stateCategory)

module.exports =router;