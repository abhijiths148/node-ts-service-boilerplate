import express, {Request, Response, NextFunction} from 'express';
import routes from 'routes';
import morgan from 'morgan';

const app = express();

// Applying CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-allow-Orgin', '*');
  // res.header('Access-Control-Allow-Orign', 'Orgin, X-Requested-With, Content-Type, Accept');
  next();
});

// Applying logging service
app.use(morgan('dev'));

// Parsing JSON request body
app.use(express.json());

// Registering routes
app.use(routes);

// Handling validation errors
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not Found');
  res.status(404);
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


export default app;