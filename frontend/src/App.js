import CompanyTitle from "./components/CompanyTitle/CompanyTitle";
import CoachingExpertsTable from "./components/CoachingExperts/CoachingExperts";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CompanyTitle />
      <CoachingExpertsTable />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
