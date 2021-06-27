import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React from "react";

interface PlatformProps {
  id: string;
  name: string;
  description?: string;
}

export const Platform: React.FC<PlatformProps> = ({ name, description }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{name}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{description || "No description"}</Typography>
    </AccordionDetails>
  </Accordion>
);
