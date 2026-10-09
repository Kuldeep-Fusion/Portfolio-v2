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
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
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