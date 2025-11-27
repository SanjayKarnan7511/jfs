
import { useState } from 'react';
import Login from './login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <div className="signed">
          <h2>Signed in as {user}</h2>
          <button className="signout-btn" onClick={() => setUser(null)}>Sign out</button>
        </div>
      ) : (
        <Login onSuccess={(email) => setUser(email)} />
      )}
    </div>
  );
}

export default App;
