import { render, screen } from '@testing-library/react';
import CurrentCoaches, { COACH_COLUMN_HEADERS, COACH_DATA } from './CurrentCoaches';

describe('CurrentCoaches Component', () => {

  test('renders the Current Coaches image and table', () => {
    render(<CurrentCoaches />);

    const coachingImage = screen.getByTestId('coaching-img');
    expect(coachingImage).toBeTruthy();

    const columnHeaders = screen.getByTestId('column-headers');
    expect(columnHeaders.textContent).toEqual(COACH_COLUMN_HEADERS.join(''));

    const tableRows = screen.getAllByTestId('table-row');
    expect(tableRows.map(row => row.textContent)).toEqual(COACH_DATA.flatMap(coach => Object.values(coach).join('')));
  });
})
