import NewMeetupForm from '../../components/meetups/NewMeetupForm'


function NewMeetupPage() {
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch("/api/new-meetup");
    }
    return ( 
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
     );
}

export default NewMeetupPage;