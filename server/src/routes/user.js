const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const Response = require("../utils/Response")
const { validationResult } = require("express-validator")
const { registerValidator } = require("../validators/validate.js")


router

/**
  * @api {post} /user/registration Sign Up Api
  * @apiName Api registration new user
  * @apiGroup User
  * @apiDescription Router for the registration new user
  *
  * @apiBody {String} mail format
  * @apiBody {String} password password must be at least 8 characters
  * @apiBody {String} firstName First name must be at least 3 characters long
  * @apiBody {String} lastName Last name must be at least 3 characters long
  *
  * @apiSuccess {Boolean} ok true
  *
  * @apiSuccessExample Body:
{
  *  error: "",
  *  ok: true,
  *  data: null
  * }

  */
.post('/registration',registerValidator, async (req, res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(new Response().error(errors.array()));
        }

        const { email, firstName, lastName, password } = req.body;
        const createUser = await userController.registration({email, firstName, lastName, password})
    
        return res.json(new Response().data(createUser));
    }catch(err){
        return res.status(500).json(new Response().error(err));
    }
})

/**
  * @api {post} /user/login Sign in Api
  * @apiName Sign in user
  * @apiGroup User
  * @apiDescription Router for the login user
  *
  * @apiBody {String} email
  * @apiBody {String} password
  *
  * @apiSuccess {Boolean} ok true
  *
  * @apiSuccessExample Body:
{
  *  error: "",
  *  ok: true,
  *  data: null
  * }

  */

.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;
        const login = await userController.login({email,password})

        return res.json(new Response().data(login));
    }catch(err){
        return res.status(500).json(new Response().error(err));
    }
})

.post('/uploadava', isAuth,upload.array("images",10), async (req,res) => {
    try{
        const { id } = req;
        const { avatar } = req.body;
        const { file } = req;
    }catch(err){

    }
})


module.exports = router;