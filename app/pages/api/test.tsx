import dbConnect from '../../models.js/dbConnect';

dbConnect();

export default async (req, res) => {
  res.json({test: 'test'});
} 