import { BackButton } from "../components/BackButton";
import type { Participant } from "../../types";
import { ParticipantsTable } from "../components/ParticipantsTable.tsx";

import { useEffect, useState } from "react";
import supabase from "../supabaseClient.ts";


// Utility function to transform API response to Participant type
function mapApiResponseToParticipant(apiResponse: any): Participant {
  return {
    id: apiResponse.id,
    startNumber: Number.parseInt(apiResponse.startnumber, 10),
    firstName: apiResponse.first_name,
    lastName: apiResponse.last_name,
    email: apiResponse.email,
    club: apiResponse.club,
    createdAt: new Date(apiResponse.created_at),
  };
}

export default function ParticipantsList() {
  const [participants, setParticipants] = useState<Participant[]>();
 // const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchParticipants() {
      const { data, error } = await supabase.from("participants").select("*");
      if (error) {
        console.error("Error fetching participants:", error);
        return;
      }
      // Transform the API response
      const transformedParticipants = data.map(mapApiResponseToParticipant);
      setParticipants(transformedParticipants);
    }

    fetchParticipants();
  }, []);


  //if (loading) return <div>Loading...</div>;
  if (!participants?.length) return <div>No participants found</div>;


  return (
    <div className="bg-tea-green-200 min-h-screen flex flex-col">
      <div className="justify-start ">
        <BackButton />
      </div>
      <h1 className="flex justify-center font-family-sans font-bold text-2xl m-2">
        Registerte deltakere
      </h1>
      {participants && participants.length > 0 ? (
        <ParticipantsTable participants={participants} />
      ) : (
        <div>No participants registered</div>
      )}
    </div>
  );
}
