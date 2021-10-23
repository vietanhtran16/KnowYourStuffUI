import { Button, TextField, Typography } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { useCreatePlatform } from "../hooks/platforms";
import { NewPlatform } from "../services/api";

export const NewPlatformForm = () => {
    const [newPlatform, setNewPlatform] = useState<NewPlatform>({ name: "", description: "" });
    const { mutate } = useCreatePlatform();
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutate(newPlatform);
    };

    return (
        <>
            <Typography variant="h6">Add Platform</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    onChange={(event) => setNewPlatform({ ...newPlatform, name: event.target.value })}
                />
                <TextField
                    label="Description"
                    onChange={(event) => setNewPlatform({ ...newPlatform, description: event.target.value })}
                />
                <Button color="primary" type="submit">
                    Add
                </Button>
            </form>
        </>
    );
};
