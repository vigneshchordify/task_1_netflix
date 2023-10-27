
import About from './About';
import './App.css';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div className="App">
      <NoteState>
        <About />
      </NoteState>

    </div>
  );
}

export default App;
