import express, {Request, Response, NextFunction} from 'express';
import routes from 'routes';

const app = express();

// Applying CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-allow-Orgin', '*');
  // res.header('Access-Control-Allow-Orign', 'Orgin, X-Requested-With, Content-Type, Accept');
  next();
});

// Applying logging service

// Parsing JSON request body
app.use(express.json());

// Registering routes
app.use(routes);

// Handling express-validation errors

export default app;