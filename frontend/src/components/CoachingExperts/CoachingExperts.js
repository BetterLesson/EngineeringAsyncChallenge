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
import "./ExpertsTable.css";

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
  return <div>Placeholder Code</div>;
}

export default CoachingExpertsTable;
