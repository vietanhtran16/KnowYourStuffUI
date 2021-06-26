import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React from "react";

export const Platform = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Platform Name</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>Platform Descrition</Typography>
    </AccordionDetails>
  </Accordion>
);
