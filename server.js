require('dotenv').config();

const express = require('express');
// const Rezorpay = require('razorpay');
// const crypto = require('crypto');
const cors = require('cors');
const router = require('./routes/route');
const connectDB = require('./utils/db');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'https://libertyandresponsibility.netlify.app',
methods: 'PUT,POST,PATCH,DELETE,GET',
}));

app.use(express.json());

app.use('/api/',router)

app.get('/', (req, res) => {
    res.send('Hello World');
});

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
