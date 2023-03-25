const MailingList = () => {
  return (
    <section
      id="mailing-list"
      className="mt-10 tablet:mt-20"
    >
      <div className="relative flex justify-center h-auto bg-center bg-cover bg-mailing-list">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-blue-800 opacity-50"></div>
        <div className="z-10 py-5">
          <h3 className="mb-4 text-xl font-bold text-center text-white tablet:text-2xl">
            Join our mailing list
          </h3>
          {/* Form */}
          <div className="flex flex-col w-4/5 gap-4 p-4 mx-auto text-sm rounded-lg tablet:flex-row tablet:items-center bg-slate-200">
            {/* Form */}
            <form className="tablet:flex-1">
              <div className="mb-2">
                <label htmlFor="fullnName">Full Name</label>
                <br />
                <input
                  className="w-full p-1"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="w-full p-1"
                  type="email"
                  placeholder="jane_doe@gemail.com"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="industry">Industry</label>
                <br />
                <select
                  className="w-full p-1"
                  name="industry"
                  id="industry"
                >
                  <option value="esports">E-Sports</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </form>
            {/* Text and Signup button */}
            <div className="flex-1">
              <p className="mb-4 text-center tablet:text-base">
                Join our mailing to recieve notifications about program
                availability and special discounts
              </p>
              <div className="flex justify-center">
                <button className="px-4 py-2 text-white bg-blue-800 tablet:px-6">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailingList;
