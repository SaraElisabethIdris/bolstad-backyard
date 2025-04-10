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
    <div className="rounded-md w-full flex justify-center">
      <table className="w-1/2 table-fixed border-collapse text-sm">
        <thead className="bg-white p-2">
          <tr>
            <th className="border-b border-gray-200 p-4 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">Start Nummer</th>
            <th className="border-b border-gray-200 p-4 p pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">Navn</th>
            <th className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">Klubb</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr
              key={participant.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className={"border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400"}>{participant.startNumber}</td>
              <td className={"border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400"}>{`${participant.firstName} ${participant.lastName}`}</td>
              <td className={"border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400"}>{participant.club}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
