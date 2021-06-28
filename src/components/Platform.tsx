import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { TipList } from "./TipList";

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
        <Typography variant="h6">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.root }}>
        <Typography>
          {description ? `Description: ${description}` : "No description"}
        </Typography>
        <TipList platformId={id} />
      </AccordionDetails>
    </Accordion>
  );
};
