import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@material-ui/core";
import CoachingPhoto from "../../images/coaching.png";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./CoachingExperts.css";

const coachingExperts = [
  {
    name: "Jessica D.",
    starting: "11/6/22",
    industry: "Professional Services",
  },
  {
    name: "David F.",
    starting: "8/5/21",
    industry: "Sports/Fitness",
  },
  {
    name: "Keir Y.",
    starting: "4/12/22",
    industry: "E-Sports",
  },
];

const theme = createTheme({
  overrides: {
    MuiTable: {
      root: {
        width: "100%",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      },
    },
  },
});

function CoachingExpertsTable() {
  return (
    <div className="coaching-container">
      <img src={CoachingPhoto} alt="coaching" className="coaching-pic" />
      <div className="table-container">
        <ThemeProvider theme={theme}>
          <Typography variant="h2" gutterBottom className="table-name">
            Current Coaches
          </Typography>
          <TableContainer component={Paper}>
            <Table className="coaching-experts-table">
              <TableHead>
                <TableRow>
                  <TableCell>Coach Name</TableCell>
                  <TableCell>Available Starting</TableCell>
                  <TableCell>Industry</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coachingExperts.map((expert) => (
                  <TableRow key={expert.name}>
                    <TableCell component="th" scope="row">
                      {expert.name}
                    </TableCell>
                    <TableCell>{expert.starting}</TableCell>
                    <TableCell>{expert.industry}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default CoachingExpertsTable;
