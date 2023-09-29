import { Router } from 'express';
import passport from 'passport';

class AuthRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
         this.router.get('/', (req, res) => {
             res.send('<h2>Api</h2>')
         });
    }

}

const authRoutes = new AuthRoutes();

export default authRoutes.router;