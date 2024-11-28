import { useMutation } from "react-query";
import { QUERY_KEYS } from "../constants";
import { Participant } from "../../types";
import {  FetchError } from "../participants-validator";

export const useAddParticipant = () => {
    return useMutation<Participant, FetchError<Participant>, Participant>(
        [QUERY_KEYS.ADD_PARTICIPANT],
        async (participant: Participant) => {
            //const validationResult = participantDTOValidator.safeParse(participant);

            const response = await fetch("http://localhost:8080/api/participants", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(participant),
            });

            if (response.ok) {
                return response.json();
            }

            const errorData = await response.json();
            console.log(errorData.message);
            throw new Error(errorData.message || "Failed to add participant");
        }
    );
};