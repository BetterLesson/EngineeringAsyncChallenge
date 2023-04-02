
import './App.css';
import CoachesSection from './components/CoachesSection';
import Footer from './components/Footer';
import MailingListSection from './components/MailingListSection';
import RegisterSection from './components/RegisterSection';


function App() {
  const coachData = [{
    name:'Jessica D.',
    startDate: '11/2/22',
    industry: 'Professional Services'
  },
  {
    name:'David F.',
    startDate: '8/5/21',
    industry: 'Sports/Fitness',

  },
  {
    name:'Keir Y.',
    startDate: '4/12/22',
    industry: 'E-Sports'
  },
  
]
  return (
    <main className="
    App 
    flex
    flex-col
    h-screen 
    w-screen 
    relative
    overflow-x-hidden
    items-center
    ">
      <section className='m-10'>
      <RegisterSection />
      <CoachesSection coachData={coachData} />
      <MailingListSection /> 
      <Footer />
      </section>
    </main>
  );
}

export default App;
