import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';



// Routes
import authRoutes from './routes/auth.routes';
import indexRoutes from './routes/index.routes';

export class App {
    app: Application;


    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json({ limit: '25mb' }));
        this.app.use(express.urlencoded({ extended: true }));

    }
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/', authRoutes);
    }


    async start(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log(`Node server running on: http://localhost:${this.app.get('port')}`);

    }

}

