import { Box } from "./Box.tsx";
import { FaCheck } from "react-icons/fa";

export function RegistrationCompleted() {
    return (
        <Box className='flex flex-col items-center'>
            <FaCheck className="text-[#4F378B] mr-2" size={100} />
            <p>Du er påmeldt Bolstad backyard!</p>
        </Box>
    );
}