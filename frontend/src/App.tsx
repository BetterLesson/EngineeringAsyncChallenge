import './App.css';
import CoachTable from './components/CoachTable';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          BetterLesson
        </p>
      </header>

      <CoachTable />

      <ContactForm />

    </div>
  );
}

export default App;
