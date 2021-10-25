import './CurrentCoaches.css';
import Coaching from '../../assets/coaching.png';
import Table from '../../components/Table/Table';

export const COACH_COLUMN_HEADERS = ['Coach Name', 'Available Starting', 'Industry'];

export const COACH_DATA = [
  {
    coachName: 'Jessica D.',
    availableStarting: '11/6/22',
    industry: 'Professional Services',
  },
  {
    coachName: 'Daivd F.',
    availableStarting: '8/5/21',
    industry: 'Sports/Fitness',
  },
  {
    coachName: 'Keir Y.',
    availableStarting: '4/12/22',
    industry: 'E-Sports',
  },
];

export default function CurrentCoaches() {
  return (
    <div className="coach-container" data-testid="coach-container">
      <img className="coaching-img" data-testid="coaching-img" src={Coaching} alt="Coaching" />
      <div className="coach-table-container">
        <div className="coach-table-title">Current Coaches</div>
        <div className="coach-table">
          <Table columnHeaders={COACH_COLUMN_HEADERS} tableRows={COACH_DATA} />
        </div>
      </div>
    </div>
  );
}

