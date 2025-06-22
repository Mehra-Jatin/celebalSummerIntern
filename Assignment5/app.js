import express from 'express';
import { connectDB } from './lib/db.js'; // Import the connectDB function
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

export default app; // Export the app for testing or further configuration