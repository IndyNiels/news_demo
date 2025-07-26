import express from 'express';
import Article from '../models/articlesModel.ts';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {

  const { archived } = req.query;
  const filter = archived === 'true'
    ? { archiveDate: { $ne: null } }  // archived
    : { archiveDate: null };          // active

  const articles = await Article.find(filter);

  res.json(articles);
});

// PUT /articles/:id — archive article by setting archiveDate
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { archiveDate } = req.body;

    // Ensure it's a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid article ID' });
    }

    const updated = await Article.findByIdAndUpdate(
      id,
      { archiveDate },
      { new: true }
    );

    if (!updated) {
      console.log('failed')
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Error archiving article:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid article ID' });
  }

  try {
    const deleted = await Article.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json({ message: 'Article deleted successfully', id });
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;
