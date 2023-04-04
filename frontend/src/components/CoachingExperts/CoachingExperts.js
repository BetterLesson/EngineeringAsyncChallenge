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
