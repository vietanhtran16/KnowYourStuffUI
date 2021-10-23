import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FormEvent, useState } from "react";
import { useCreatePlatform } from "../hooks/platforms";
import { NewPlatform } from "../services/api";

export const NewPlatformForm: React.FC = () => {
    const [newPlatform, setNewPlatform] = useState<NewPlatform>({ name: "", description: "" });
    const { mutate } = useCreatePlatform();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutate(newPlatform);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant="h6">Add Platform</Typography>
                <Grid container alignItems="center" spacing={5}>
                    <Grid item>
                        <TextField
                            label="Name"
                            onChange={(event) => setNewPlatform({ ...newPlatform, name: event.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Description"
                            onChange={(event) => setNewPlatform({ ...newPlatform, description: event.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <Button color="primary" type="submit">
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};
