import React from 'react';
import tableImg from '../../assets/images/coaching.png';
import Table from '../../components/Table/Table';

const Coaching = () => {
  return (
    <section
      id="coaching"
      className="mt-10"
    >
      <div className="flex flex-col gap-4">
        <div className="">
          <img
            className="w-4/5 rounded-lg mx-auto
            "
            src={tableImg}
            alt="Student having video call with coach"
          />
        </div>
        {/* Table */}
        <div>
          <div className="mx-5">
            <h1 className="text-xl text-center text-blue-800 font-semibold mb-4">
              Current Coaches
            </h1>
          </div>

          <Table
            headers={['Coach Name', 'Available Starting', 'Industry']}
            data={[
              {
                name: 'Jessica D.',
                availableStarting: '11/6/22',
                industry: 'Professional Services',
              },
              {
                name: 'David F.',
                availableStarting: '8/5/21',
                industry: 'Sports/Fitness',
              },
              {
                name: 'Keir Y.',
                availableStarting: '4/12/22',
                industry: 'E-Sports',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Coaching;
