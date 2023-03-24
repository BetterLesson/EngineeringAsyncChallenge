interface Props {
  headers: string[];
  data: { [key: string]: string }[];
}
const Table = ({ headers, data }: Props) => {
  return (
    <div className=" mx-5 text-center text-sm tablet:text-base">
      <div className="flex flex-col">
        {/* Headers */}
        <div className="headers flex font-bold items-center gap-1">
          {headers.map((header) => (
            <div
              key={header}
              className="flex-1"
            >
              {header}
            </div>
          ))}
        </div>
        {/* Data */}
        <div>
          {data.map((row) => (
            <div>
              <hr className="my-1" />
              <div
                key={row.name}
                className="flex items-center gap-1"
              >
                {Object.values(row).map((value) => (
                  <div
                    key={value}
                    className="flex-1 my-1"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
