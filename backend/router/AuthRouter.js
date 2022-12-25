import express from 'express'
import { AuthControllerClass } from '../controller/AuthController.js';

export const AuthRouter = express.Router();

const AuthController = new AuthControllerClass();

AuthRouter.route('/AuthLogin') 
    .post((req,res)=>AuthController.Login(req,res))
AuthRouter.route('/AuthRegister')
.post((req,res)=>AuthController.Register(req,res))