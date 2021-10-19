import React, { BaseSyntheticEvent, useState } from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import { TipList } from "./TipList";
import { useFavouritePlatformsCountContext } from "../state/favourite-platforms-count";

const useStyles = makeStyles({
    accordionSummaryContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    accordionDetailsRoot: {
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

export const Platform: React.FC<PlatformProps> = ({ id, name, description }: PlatformProps) => {
    const classes = useStyles();
    const [hasLoadedTipList, setHasLoadedTipList] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    const { increment, decrement } = useFavouritePlatformsCountContext();
    const handleSelectFavourite = (event: BaseSyntheticEvent) => {
        event.stopPropagation();
        if (isFavourite) {
            setIsFavourite(false);
            decrement();
        } else {
            setIsFavourite(true);
            increment();
        }
    };

    return (
        <Accordion
            onChange={(_, expanded) => {
                if (!hasLoadedTipList && expanded) {
                    setHasLoadedTipList(true);
                }
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{ content: classes.accordionSummaryContent }}
            >
                <Typography variant="h6">{name}</Typography>
                {isFavourite ? (
                    <StarSharpIcon onClick={handleSelectFavourite} />
                ) : (
                    <StarBorderIcon onClick={handleSelectFavourite} />
                )}
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.accordionDetailsRoot }}>
                <Typography className={classes.description}>
                    {description ? `Description: ${description}` : "No description"}
                </Typography>
                {hasLoadedTipList && <TipList platformId={id} />}
            </AccordionDetails>
        </Accordion>
    );
};
