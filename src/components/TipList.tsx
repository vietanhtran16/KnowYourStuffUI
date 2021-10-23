import React from "react";
import { CircularProgress } from "@material-ui/core";
import { Tip } from "./Tip";
import { useTips } from "../hooks/tips";

interface TipListProps {
    platformId: string;
}

export const TipList: React.FC<TipListProps> = ({ platformId }: TipListProps) => {
    const { isLoading, data: tips } = useTips(platformId);

    return <>{isLoading ? <CircularProgress /> : tips?.map((tip) => <Tip key={tip.id} {...tip} />)}</>;
};
