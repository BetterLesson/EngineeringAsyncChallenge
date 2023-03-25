import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'coachName', headerName: 'Coach Name', flex: 1 },
    { field: 'startDate', headerName: 'Available Starting', flex: 1 },
    { field: 'industry', headerName: 'Industry', flex: 1 }
];

// hard code table data for testing
const rows = [
    { id: 1, coachName: 'Jessica D.', startDate: '11/6/22', industry: 'Professional Services' },
    { id: 2, coachName: 'David F.', startDate: '8/5/21', industry: 'Sports/Fitness' },
    { id: 3, coachName: 'Keir Y.', startDate: '4/12/22', industry: 'E-Sports' }
];

// component that contains a table on upcoming coaching options
function CoachTable() {
    return (
        <div className='Coach-table-container'>
            <div className='Coach-table-text'>
                Meet our experts
            </div>

            <DataGrid className='Coach-table'
                rows={rows}
                columns={columns}
                autoHeight={true}
            />
        </div>
    );
}
  
export default CoachTable;