import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AvailableCoaches from './coaches/AvailableCoaches';
import MailingList from './mailing_list/MailingList';

import bl_logo from './media/BL_LogoBasic.png';
import coaching_img from './media/coaching.png'

const coaches = [
  {
    id: 1,
    name: "Jessica D.",
    availability: "11/6/22",
    industry: "Professional Services"
  },
  {
    id: 2,
    name: "David F.",
    availability: "8/5/21",
    industry: "Sports/Fitness"
  },
  {
    id: 3,
    name: "Jessica D.",
    availability: "4/12/22",
    industry: "E-Sports"
  }
]

function App() {
  return (
    <>
      <div id="hero">
        <div className="px-4 text-center">
          <img className="d-block mx-auto mb-4" src={bl_logo} alt="BetterLesson Logo" width="85px" height="85px" />
          <h1 className="display-5 fw-bold">BetterLesson Coaching Services</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Available coaches available at launch.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <div className="row">
                <div className="col">
                  <img src={coaching_img} alt="Available coaches" width="248" height="238" />
                </div>
                <AvailableCoaches coaches={coaches} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MailingList />
    </>
  )
}

export default App;
