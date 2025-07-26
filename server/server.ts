
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './connect.ts';
import articleRoutes from './routes/articles.ts';

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.use('/routes/articles', articleRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
