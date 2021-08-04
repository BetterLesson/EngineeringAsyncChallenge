import React from "react";
import { Table } from "semantic-ui-react";

const mapDataToTable = (dataToRender) => {
  // TODO In future state, this function should take an argument listing each key of the row it needs to map so they are not hardcoded
  return dataToRender.map((row) => {
    return (
      <Table.Row key={row.Name}>
        <Table.Cell>{row.Name}</Table.Cell>
        <Table.Cell>{row.AvailableStart}</Table.Cell>
        <Table.Cell>{row.Industry}</Table.Cell>
      </Table.Row>
    );
  });
};

// TODO Future state: make sure the number of headers match the number of columns in the given data, just in case
const mapDataToHeaders = (headersToRender) => {
  return headersToRender.map((header) => {
    return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
  });
};

const TableComponent = (props) => (
  <Table striped>
    <Table.Header>
      <Table.Row>{mapDataToHeaders(props.headers)}</Table.Row>
    </Table.Header>
    <Table.Body>{mapDataToTable(props.content)}</Table.Body>
  </Table>
);

export default TableComponent;
