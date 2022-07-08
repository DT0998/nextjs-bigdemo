import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5,12345 Some City",
    description: "This is first meetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10,12345 Some City",
    description: "This is first meetup!",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
