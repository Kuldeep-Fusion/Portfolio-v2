import ConnectDB from '../lib/db.js'
import express from 'express'
import ContactRoute from '../routes/contact.route.js';
import ProjectRouter from '../routes/prjoect.route.js';
import UserRouter from '../routes/user.route.js'
import cors from 'cors'


const app = express();
ConnectDB();


app.use(express.json());

const allowedOrigins = [
  "https://kuldeep-zeta.vercel.app",
  "https://admincms-one.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use('/api/contact', ContactRoute);
app.use('/api/project', ProjectRouter);
app.use('/api/user', UserRouter);


app.get("/", (req, res) => {
  res.json({
    message: "API working 🚀",
  });
});

export default app;