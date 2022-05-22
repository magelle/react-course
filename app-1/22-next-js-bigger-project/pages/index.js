import MeetupList from "../components/meetups/MeetupList";
import {Fragment, useEffect, useState} from "react";
import {MongoClient} from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return <Fragment>
  <Head>
    <title>React Meetups</title>
    <meta name="description" content="try learn react"/>
  </Head>
  <MeetupList meetups={props.meetups}/>
  </Fragment>
}

// Server Side page generation
// export const getServerSideProps = (context) => {
//   // Request and Responses
//   const request = context.req;
//   const response = context.res;
//
//   // run some codes
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// Static generation
export const getStaticProps = async () => {
  // read data from somewhere

  const client = await MongoClient.connect('mongodb+srv://magelle:xX9GzxgNN8$G@react-course.ajvki.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(m => ({
        id: m._id.toString(),
        title: m.title,
        address: m.address,
        image: m.image
      }))
    },
    revalidate: 10 // This page will be re--pre-generated (on server) every 10 seconds
  }
}

export default HomePage;