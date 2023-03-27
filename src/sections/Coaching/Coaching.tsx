import tableImg from '../../assets/images/coaching.png';
import Table from '../../components/Table/Table';
import { coaches } from '../../data/data';

const Coaching = () => {
  return (
    <section
      id="coaching"
      className="mt-10 tablet:mt-20"
    >
      <div className="flex flex-col items-center gap-2 tablet:flex-row tablet:gap-0">
        <div className="laptop:flex-1">
          <img
            className="w-4/5 mx-auto rounded-lg tablet:w-full tablet:rounded-none "
            src={tableImg}
            alt="Student having video call with coach"
          />
        </div>
        {/* Table */}
        <div className="mx-5 tablet:basis-11/12 tablet:mx-0 laptop:flex-1">
          <div>
            <h1 className="mb-4 text-xl font-semibold text-center text-blue-800 tablet:text-2xl">
              Current Coaches
            </h1>
          </div>

          <Table
            headers={['Coach Name', 'Available Starting', 'Industry']}
            classes="mx-5 text-sm text-center tablet:text-base laptop:text-lg"
            data={coaches}
          />
        </div>
      </div>
    </section>
  );
};

export default Coaching;
