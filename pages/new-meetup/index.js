import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
      console.log(data);
      router.push('/')
  }
  return (
    <React.Fragment>
      <Head>
           <title>React Meetups</title>
        <meta name="description" content="Add your own meetups and create amazing networking opportunities." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </React.fragment>
  )
}

export default NewMeetupPage;
