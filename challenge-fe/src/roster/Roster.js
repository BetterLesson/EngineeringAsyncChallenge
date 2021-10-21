import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import './Roster.css';
import { rowData, colData } from './Data';

export const Roster = () => {
    return (
        <div className="RosterContainer">
            <div className="RosterCell">
                <div className="RosterTableDescription">
                    View our current roster<br />
                    of consulting instructors
                </div>
            </div>
            <div className="RosterCell">
                < div className="RosterTable" >
                    <DataGrid
                        rows={rowData}
                        columns={colData}
                        hideFooter={true}
                    />
                </div >
            </div>
        </div >
    );
}

