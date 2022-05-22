// /api/new-meetup

import {MongoClient} from "mongodb";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://magelle:xX9GzxgNN8$G@react-course.ajvki.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db();

    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    await client.close();

    res.status(201)
      .json({message: 'meetup inserted!'})
  }
};
export default handler;