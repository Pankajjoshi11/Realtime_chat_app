import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Message from '../../../models/Message';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const messages = await Message.find({});
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve messages' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
