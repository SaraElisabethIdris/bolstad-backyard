import {Button} from "@mui/material";

export const BackButton = () => {
    return (
        <Button onClick={() => window.history.back()}>Tilbake</Button>
    );
}