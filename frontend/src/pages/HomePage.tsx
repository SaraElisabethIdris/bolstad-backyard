import {router} from "./router.tsx";
import {ROUTE_PATHS} from "./constants.ts";
import {Button} from "@mui/material";

export const HomePage = () => {
const handleOnClick = () => {
    router.navigate(ROUTE_PATHS.ADD_PARTICIPANT);
}
    return (
        <div>
        <h1>Home Page</h1>
            <Button onClick={handleOnClick}>Gå til påmelding</Button>
        </div>
    );
}