import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Platform } from "../components/Platform";
import { NewPlatformForm } from "../components/NewPlatformForm";
import { usePlatforms } from "../hooks/platforms";

export const PlatformPage: React.FC = () => {
    const { isLoading, data: platforms } = usePlatforms();

    return (
        <>
            <NewPlatformForm />
            {isLoading ? (
                <CircularProgress />
            ) : (
                platforms?.map((platform) => <Platform key={platform.id} {...platform} />)
            )}
        </>
    );
};
