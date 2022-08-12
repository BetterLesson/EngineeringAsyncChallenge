import React from "react";
import "./table.css";
const Table = ({
  data = null,
  columns = null,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{head.header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr>
                {columns.map((col) => (
                  <td>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;