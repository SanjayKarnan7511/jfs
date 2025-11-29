
import { useState } from 'react';
import Login from './login';
import Proj1 from './proj1';
import Todo from './Todo';
import './App.css';
function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); 

  return (
    <div className="App">
      <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:12}}>
        <button className="addbtn" onClick={()=>setView('login')}>LOGIN</button>
        <button className="addbtn" onClick={()=>setView('todo')}>TODO</button>
        
        <button className="addbtn" onClick={()=>setView('proj1')}>CLOCK</button>
      </div>

      {user ? (
        <div className="signed">
          <h2>Signed in as {user}</h2>
          <button className="signout-btn" onClick={() => setUser(null)}>Sign out</button>
        </div>
      ) : (
        view === 'proj1' ? <Proj1 /> : view === 'todo' ? <Todo /> :
        <Login onSuccess={(email) => setUser(email)} />
      )}
    </div>
  );
}

export default App;
