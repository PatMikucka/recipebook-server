import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import recipeRoutes from './routes/recipes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhoast:5173'
}));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
