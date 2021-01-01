import dbConnect from '../../models/dbConnect';

dbConnect();

export default async (req, res) => {
  res.json({ "test": "test" })
} 

