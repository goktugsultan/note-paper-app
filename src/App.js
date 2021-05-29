import { useState } from 'react';
import NotesList from './components/NotesList';

function App() {

  const [notes,setNotes] = useState([
    {
        id: 1,
        text:"This is first note",
        date:"29 May 2021",
    },
    {
        id: 2,
        text:"This is second note",
        date:"23 April 2021",
    },
    {
        id: 3,
        text:"This is third note",
        date:"25 June 2021",
    },
    {
      id: 4,
      text:"This is new note",
      date:"25 Jan 2021",
  },
]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
