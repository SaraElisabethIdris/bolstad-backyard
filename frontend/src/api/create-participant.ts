import { useMutation } from "react-query";
import supabase from "../supabaseClient.ts";
import type { Participant } from "../../types";
import type { FetchError } from "../participants-validator";

export const useAddParticipant = () => {
    return useMutation<void, FetchError<Participant>, Participant>(
        async (participant: Participant) => {
            const { error } = await supabase
                .from("participants")
                .insert([{
                    first_name: participant.firstName,
                    last_name: participant.lastName,
                    email: participant.email,
                    club: participant.club,
                    created_at: participant.createdAt.toISOString(),
                }]);

            if (error) {
                console.error("Error adding participant:", error.message);
                throw new Error(error.message || "Failed to add participant");
            }
        },
    );
};