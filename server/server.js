import express from 'express';
import mongoose from 'mongoose';
import serverconfig from './config';
import routes from './routes/ocrroutes';
// Initialize the Express App
const app = new Express();

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverconfig.mongoURL, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!');
        throw error;
    }
});


app.use('/api', route);

// start app
app.listen(serverConfig.port, (error) => {
    if (!error) {
        console.log(`app is running on port: ${serverconfig.port}!`); // eslint-disable-line
    }
});

export default app;
