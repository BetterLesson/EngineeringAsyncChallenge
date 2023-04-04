// import logo from "./logo.svg";
// import './App.css';
import CompanyTitle from "./components/CompanyTitle/CompanyTitle";
import CoachingExpertsTable from "./components/CoachingExperts/CoachingExperts";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <CompanyTitle />
      <CoachingExpertsTable />
      <ContactForm />
    </div>
  );
}

export default App;
