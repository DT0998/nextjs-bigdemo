import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import React from "react";

function HomePage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browser a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </React.Fragment>
  );
}

// SSR
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //  fetch data from a api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// SSG
export async function getStaticProps() {
  // fetch data from a api
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@location.08pzgpb.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
