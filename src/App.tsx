import './App.css';
import Coaching from './sections/Coaching/Coaching';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import MailingList from './sections/MailingList/MailingList';

function App() {
  return (
    <div className="">
      <Hero />
      <Coaching />
      <MailingList />
      <Footer />
    </div>
  );
}
export default App;
