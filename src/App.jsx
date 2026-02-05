import { useState } from 'react';
import QuestionSection from './QuestionSection';
import CelebrationSection from './CelebrationSection';

function App() {
  const [celebrating, setCelebrating] = useState(false);

  // Extract name from URL path (e.g., /arun -> Arun)
  const pathName = window.location.pathname.substring(1); // Remove leading slash
  const name = pathName ? decodeURIComponent(pathName).charAt(0).toUpperCase() + decodeURIComponent(pathName).slice(1) : "Valentine";

  return (
    <div className="app-container">
      {celebrating ? (
        <CelebrationSection name={name} />
      ) : (
        <QuestionSection onYes={() => setCelebrating(true)} />
      )}
    </div>
  );
}

export default App;
