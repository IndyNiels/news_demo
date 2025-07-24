import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now, // date of storage
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  archiveDate: {
    type: Date,
    default: null, // null means not archived yet
  },
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
