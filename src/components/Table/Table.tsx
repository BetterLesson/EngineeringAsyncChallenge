interface Props {
  headers: string[];
  data: { [key: string]: string }[];
  classes?: string;
}
const Table = ({ headers, data, classes }: Props) => {
  return (
    <div className={classes}>
      <div className="flex flex-col">
        {/* Headers */}
        <div className="flex items-center gap-1 font-bold headers">
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
            <div key={row.name}>
              <hr className="my-1" />
              <div className="flex items-center gap-1">
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
