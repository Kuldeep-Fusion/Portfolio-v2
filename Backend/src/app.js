import ConnectDB from '../lib/db.js' 
import express from 'express'
import ContactRoute from '../routes/contact.route.js';
import ProjectRouter from'../routes/prjoect.route.js';
import UserRouter from '../routes/user.route.js'
import cors from 'cors'


const app = express();
ConnectDB();



app.use(express.json());
app.use(cors());
app.use('/api/contact', ContactRoute);
app.use('/api/project', ProjectRouter);
app.use('/api/user', UserRouter);

app.get('/',(req, res) => {
    res, console.log("Server is runing")
});

export default app;