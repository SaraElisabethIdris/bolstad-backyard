import {Button} from "@mui/material";

export const PrimaryButton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </Button>
    );
}