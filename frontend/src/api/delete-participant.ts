export const DeleteParticipant = async (id: string) => {
  const response = await fetch(`http://localhost:3000/participants/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete participant");
  }
};
