import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './GridTable.css';
 
function GridTable (props) {
    return (
        <div className="fullWidthDiv">
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                {...props}
            />
        </div>
    );
}

export default GridTable;
