import './App.css';
import Coaching from './sections/Coaching/Coaching';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import MailingList from './sections/MailingList/MailingList';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-200">
      <main className="max-w-[1100px] mx-auto bg-white mb-auto">
        <Hero />
        <Coaching />
        <MailingList />
      </main>
      <Footer />
    </div>
  );
}
export default App;
