const express=require('express');
const router=express.Router();
const createController=require('../controllers/create');
router.post('/',createController.create);

module.exports=router;