const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const reviewSchema = new mongoose.Schema({
  id: mongoose.SchemaTypes.ObjectId,
  name: String,
  title: String,
  author: String,
  review: String,
  rating: Number,
});

const Review = mongoose.model('Review', reviewSchema);


app.post('/api/reviews', async (req, res) => {
  try {

    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, this is the Book Reviews server!');
});

app.delete('/api/reviews/:id', async (req, res) => {
  try {
    removeReview(res, req.params.id);
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const removeReview = async (res, reviewId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      console.log('Invalid reviewId:', reviewId);
      return res.status(400).json({ error: 'Invalid reviewId' });
    }

    const objectIdReviewId = new mongoose.Types.ObjectId(reviewId);
    const deletedReview = await Review.findByIdAndDelete(objectIdReviewId);

    if (deletedReview) {
      res.status(200).json(deletedReview);
    } else {
      console.log('Review not found for ID:', objectIdReviewId);
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    console.error('Error removing review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
