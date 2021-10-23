import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Platform } from "../components/Platform";
import { usePlatforms } from "../hooks/platforms";

export const PlatformPage: React.FC = () => {
    const { isLoading, data: platforms } = usePlatforms();
    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <>
            {platforms?.map((platform) => (
                <Platform key={platform.id} {...platform} />
            ))}
        </>
    );
};
