import { render, screen } from '@testing-library/react';
import Table from './Table';

const TABLE_KEYS = ['First Table Key', 'Second Table Key'];

const TABLE_ROWS = [{
  firstTableKey: 'first',
  secondTableKey: 'second',
}];

describe('Table Component', () => {

  test('renders the table with the proper headers and row data', () => {
    render(<Table columnHeaders={TABLE_KEYS} tableRows={TABLE_ROWS}/>);

    const columnHeaders = screen.getByTestId('column-headers');
    expect(columnHeaders.textContent).toEqual(TABLE_KEYS.join(''));

    const tableRow = screen.getByTestId('table-row');
    expect(tableRow.textContent).toEqual(`${TABLE_ROWS[0].firstTableKey}${TABLE_ROWS[0].secondTableKey}`);
  });

  test('dynamically sets grid template columns', () => {
    render(<Table columnHeaders={TABLE_KEYS} tableRows={TABLE_ROWS}/>);

    const columnHeaders = screen.getByTestId('column-headers');
    expect(columnHeaders.getAttribute('style')).toEqual('grid-template-columns: repeat(2, 1fr);');

    const tableRow = screen.getByTestId('table-row');
    expect(tableRow.getAttribute('style')).toEqual('grid-template-columns: repeat(2, 1fr);');
  });

  test('renders multiple rows of data', () => {
    const ROW_COUNT = 4;
    render(<Table columnHeaders={TABLE_KEYS} tableRows={Array(ROW_COUNT).fill(TABLE_ROWS[0])}/>);

    const tableRows = screen.getAllByTestId('table-row');
    expect(tableRows).toHaveLength(ROW_COUNT);
  });
})