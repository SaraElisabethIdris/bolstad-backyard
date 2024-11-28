import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../constants';
import { BackButton } from "../components/BackButton";
import { Participant } from "../../types";
import {ParticipantsTable} from "../components/ParticipantsTable.tsx";
import {useEffect} from "react";

const fetchParticipants = async (): Promise<Participant[]> => {
    const response = await fetch('/api/participants');
    if (!response.ok) {
        throw new Error('Failed to fetch participants');
    }
    return response.json();
};

export default function ParticipantsList() {
    const { data: participants, isLoading, isError, refetch } = useQuery<Participant[], Error>(
        QUERY_KEYS.GET_PARTICIPANTS,
        fetchParticipants
    );

    useEffect(() => {
       void refetch()
    }, [participants]);


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching participants</div>;

    return (
        <div>
            <BackButton />
            <h1>Registered Participants</h1>
            {participants && participants.length > 0 ? (
                <ParticipantsTable participants={participants} />
            ) : (
                <div>No participants registered</div>)}
        </div>
    );
}