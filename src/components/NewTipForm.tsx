import React, { FormEvent, useState } from "react";
import { Grid, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { NewTip } from "../services/api";
import { useCreateTip } from "../hooks/tips";

interface Props {
    platformId: string;
    className?: string;
}

export const NewTipForm: React.FC<Props> = ({ platformId, className }: Props) => {
    const defaultState: NewTip = { description: "", snippet: "" };
    const [tip, setTip] = useState<NewTip>(defaultState);
    const { mutate } = useCreateTip();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutate({ tip, platformId });
        setTip(defaultState);
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            <Grid container alignItems="center" spacing={3}>
                <Grid item>
                    <TextField
                        label="Tip's description"
                        value={tip.description}
                        onChange={(event) => setTip({ ...tip, description: event.target.value })}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Snippet"
                        value={tip.snippet}
                        onChange={(event) => setTip({ ...tip, snippet: event.target.value })}
                    />
                </Grid>
                <Grid item>
                    <IconButton type="submit">
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    );
};
