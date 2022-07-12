import React, { useState, useEffect } from 'react';
import '/node_modules/primeflex/primeflex.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import '/node_modules/primereact/resources/themes/vela-blue/theme.css'

function Table({data, headers}) {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(data)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Card className=''>
                <DataTable value={tableData} className='col-4 col-offset-4'  responsiveLayout="scroll">
                    <Column className='col-3' field="name" header={headers.name}></Column>
                    <Column className='col-3' field="field" header={headers.field}></Column>
                    <Column className='col-3' field="years" header={headers.years}></Column>
                    <Column className='col-3' field="colleges" header={headers.colleges}></Column>
                </DataTable>
            </Card>
        </div>
    );
}

export default Table;
