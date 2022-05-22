import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectID} from "mongodb";
import {Fragment} from "react";
import Head from "next/head";

const MeetupDetails = (props) => {
  return <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
    </Head>
    <meta name="description" content={props.meetupData.description}/>
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  </Fragment>
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect('mongodb+srv://magelle:xX9GzxgNN8$G@react-course.ajvki.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    paths: meetups.map(m => ({params: {meetupId: m._id.toString()}})),
    fallback: true // is the paths array exhaustive
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect('mongodb+srv://magelle:xX9GzxgNN8$G@react-course.ajvki.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const meetupCollection = db.collection('meetups');
  const meetup = await meetupCollection.findOne({_id: ObjectID(meetupId)});

  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      }
    }
  }
}

export default MeetupDetails;