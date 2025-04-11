import type { Participant } from "../../types.ts";

interface ParticipantsTableProps {
  participants: Participant[];
  onDelete?: (id: number) => void;
}

export function ParticipantsTable({ participants }: ParticipantsTableProps) {
  if (participants.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="text-gray-500">Ingen deltakere registrert</p>
      </div>
    );
  }

  return (
    <div className=" w-full flex justify-start md:justify-center overflow-x-auto p-4">
      <table className="w-1/2 table-auto border-collapse text-sm text-black">
        <thead className="bg-white p-2">
          <tr>
            <th className="border-b border-gray-200 p-4 pb-3 pl-8 text-left font-medium text-gray-900 dark:border-gray-600 dark:text-gray-200">Navn</th>
            <th className="border-b border-gray-200 p-4 p pb-3 pl-8 text-left font-medium text-gray-900 dark:border-gray-600 dark:text-gray-200">Klubb</th>
            <th className="border-b border-gray-200 p-4 pb-3 pl-8 text-left font-medium text-gray-900 dark:border-gray-600 dark:text-gray-200">Startnummer</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr
              key={participant.id}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              <td className={"border-b border-gray-100 p-4 pl-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"}>{`${participant.firstName} ${participant.lastName}`}</td>
              <td className={"border-b border-gray-100 p-4 pl-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"}>{participant.club}</td>
              <td className={"border-b border-gray-100 p-4 pl-4 text-gray-500 dark:border-gray-700 dark:text-gray-400 text-center"}>{participant.startNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
