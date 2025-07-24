// Initialize news database with sample data
db = db.getSiblingDB('newsdb');

// Create articles collection
db.articles.insertMany([
  {
    title: "Breaking: AI Revolution Transforms Tech Industry",
    description: "Artificial intelligence continues to reshape how companies operate and develop products across multiple sectors.",
    date: new Date("2024-01-15"),
    content: "The artificial intelligence revolution is transforming the technology industry at an unprecedented pace. Companies are investing billions in AI research and development, leading to breakthrough innovations in machine learning, natural language processing, and computer vision. This technological shift is not only changing how businesses operate but also creating new opportunities for developers and entrepreneurs worldwide.",
    author: "Sarah Johnson",
    archiveDate: null
  },
  {
    title: "Global Climate Summit Reaches Historic Agreement",
    description: "World leaders unite on comprehensive climate action plan with binding commitments for carbon neutrality.",
    date: new Date("2024-02-03"),
    content: "In a landmark decision at the Global Climate Summit, 195 countries have agreed to a comprehensive climate action plan that includes binding commitments to achieve carbon neutrality by 2050. The agreement encompasses renewable energy targets, forest conservation initiatives, and substantial funding for developing nations to transition to clean energy infrastructure.",
    author: "Michael Chen",
    archiveDate: null
  },
  {
    title: "Space Exploration Milestone: Mars Mission Success",
    description: "Latest Mars rover mission achieves groundbreaking discoveries about potential life on the red planet.",
    date: new Date("2024-03-20"),
    content: "The latest Mars rover mission has achieved remarkable success, uncovering evidence of ancient water systems and organic compounds that suggest the possibility of past microbial life on Mars. This discovery represents a significant milestone in space exploration and brings humanity closer to answering fundamental questions about life beyond Earth.",
    author: "Dr. Emily Rodriguez",
    archiveDate: null
  },
  {
    title: "Economic Markets Show Strong Recovery Signals",
    description: "Financial analysts report positive trends across global markets with sustained growth projections.",
    date: new Date("2024-04-10"),
    content: "Global financial markets are demonstrating robust recovery signals following recent economic challenges. Key indicators including employment rates, consumer spending, and corporate earnings are all trending positively. Economic analysts project sustained growth over the next quarters, driven by technological innovation and increased consumer confidence.",
    author: "James Wilson",
    archiveDate: null
  },
  {
    title: "Healthcare Innovation: Gene Therapy Breakthrough",
    description: "Revolutionary gene therapy treatment shows promising results in clinical trials for rare diseases.",
    date: new Date("2024-05-05"),
    content: "A revolutionary gene therapy treatment has shown exceptional promise in Phase III clinical trials, offering hope for patients with rare genetic disorders. The innovative approach uses advanced CRISPR technology to correct genetic mutations at the cellular level, potentially providing long-lasting treatment for conditions previously considered incurable.",
    author: "Dr. Lisa Park",
    archiveDate: null
  }
]);

// Create users collection

print("News database initialized successfully!");
