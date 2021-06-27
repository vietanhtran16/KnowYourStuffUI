import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { Tips } from "./Tips";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});
interface PlatformProps {
  id: string;
  name: string;
  description?: string;
}

export const Platform: React.FC<PlatformProps> = ({
  id,
  name,
  description,
}) => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.root }}>
        <Typography>{description || "No description"}</Typography>
        <Tips platformId={id} />
      </AccordionDetails>
    </Accordion>
  );
};
