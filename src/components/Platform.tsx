import React, { useState } from "react";
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
  description: {
    marginBottom: "12px",
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Accordion onChange={(_, expanded) => setIsExpanded(expanded)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.root }}>
        <Typography className={classes.description}>
          {description ? `Description: ${description}` : "No description"}
        </Typography>
        {isExpanded && <TipList platformId={id} />}
      </AccordionDetails>
    </Accordion>
  );
};
