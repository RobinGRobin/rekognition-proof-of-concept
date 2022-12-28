import express from 'express';
import morgan from 'morgan';
import routes from './routes/routes.js'

const app = express();

// Settings
app.set('port', 4000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/aws/api', routes);    // REST API for AWS connection 
// app.use('/mongo/api', mongoroutes) // REST API for MongoDB connection

// Server start
app.listen(app.get('port'), ()=>{
    console.log('Server listening on port', app.get('port'));
});