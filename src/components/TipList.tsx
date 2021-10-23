import React from "react";
import { CircularProgress } from "@material-ui/core";
import { Tip } from "./Tip";
import { useTips } from "../hooks/tips";
import { NewTipForm } from "./NewTipForm";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    tipForm: {
        marginBottom: "16px",
    },
});
interface TipListProps {
    platformId: string;
}

export const TipList: React.FC<TipListProps> = ({ platformId }: TipListProps) => {
    const { tipForm } = useStyles();
    const { isLoading, data: tips } = useTips(platformId);

    return (
        <>
            <NewTipForm platformId={platformId} className={tipForm} />
            {isLoading ? <CircularProgress /> : tips?.map((tip) => <Tip key={tip.id} {...tip} />)}
        </>
    );
};
