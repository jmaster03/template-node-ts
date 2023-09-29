import { Router } from 'express';
import AuthController from '../controllers/auth/auth.controller';
import passport from 'passport';

import  verifySignup  from "../middlewares/verifySignUp";

class AuthRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.use((req, res, next) => {
            res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });


        this.router.post('/login', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], AuthController.signin);
        this.router.post('/register', AuthController.signup);


    }




}






const authRoutes = new AuthRoutes();

export default authRoutes.router;