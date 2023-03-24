import './App.css';
import Coaching from './sections/Coaching/Coaching';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import MailingList from './sections/MailingList/MailingList';

function App() {
  return (
    <div className="bg-slate-200 relative min-h-screen">
      <main className="max-w-[900px] mx-auto bg-white mb-auto">
        <Hero />
        <Coaching />
        <MailingList />
      </main>
      <Footer />
    </div>
  );
}
export default App;
