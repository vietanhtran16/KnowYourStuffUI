import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FormEvent, useState } from "react";
import { useCreatePlatform } from "../hooks/platforms";
import { NewPlatform } from "../services/api";

export const NewPlatformForm: React.FC = () => {
    const defaultPlatform = { name: "", description: "" };
    const [newPlatform, setNewPlatform] = useState<NewPlatform>(defaultPlatform);
    const { mutate } = useCreatePlatform();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutate(newPlatform);
        setNewPlatform(defaultPlatform);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant="h6">Add Platform</Typography>
                <Grid container alignItems="center" spacing={5}>
                    <Grid item>
                        <TextField
                            label="Name"
                            value={newPlatform.name}
                            onChange={(event) => setNewPlatform({ ...newPlatform, name: event.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Description"
                            value={newPlatform.description}
                            onChange={(event) => setNewPlatform({ ...newPlatform, description: event.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <Button disabled={!newPlatform.name} color="primary" type="submit">
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};
