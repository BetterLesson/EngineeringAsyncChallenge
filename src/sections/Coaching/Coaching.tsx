import Table from '../../components/Table/Table';

const Coaching = () => {
  const tableData = [
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
  ];

  return (
    <section
      id="coaching"
      className="mt-5"
    >
      <div className="mx-5">
        <h1 className="text-xl text-center text-blue-800 font-semibold mb-4">
          Current Coaches
        </h1>
      </div>

      <Table
        headers={['Coach Name', 'Available Starting', 'Industry']}
        data={tableData}
      />
    </section>
  );
};

export default Coaching;
