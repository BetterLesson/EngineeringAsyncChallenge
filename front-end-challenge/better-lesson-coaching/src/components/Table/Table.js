import './Table.css';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const formatToCamelCase = (text) => {
  const keys = text.replace(/\s/g, '');
  return `${keys[0].toLowerCase()}${keys.slice(1)}`;
};

export default function Table({ columnHeaders, tableRows }) {
  const tableRowKeys = columnHeaders.map(header => formatToCamelCase(header));
  const columnStyle = { gridTemplateColumns: `repeat(${columnHeaders.length}, 1fr)` };

  const renderColumnHeaders = () => (
    <div className="column-headers" data-testid="column-headers" style={columnStyle}>
      {columnHeaders.map(header => <span key={uuid()}>{header}</span>)}
    </div>
    );

  const renderTableRows = () => tableRows.map(row => (
    <div className="table-row" data-testid="table-row" style={columnStyle} key={uuid()}>
      {tableRowKeys.map(rowKey => <span key={uuid()}>{row[rowKey]}</span>)}
    </div>
  ));

  return (
    <div className="table-container" data-testid="table">
      {renderColumnHeaders()}
      {renderTableRows()}
    </div>
  );
}

Table.propTypes = {
  columnHeaders: PropTypes.array.isRequired,
  tableRows: PropTypes.array.isRequired,
};

