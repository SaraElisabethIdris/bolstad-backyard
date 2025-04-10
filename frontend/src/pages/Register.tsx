import { type ChangeEvent, type FormEvent, useState } from "react";
import { useAddParticipant } from "../api/create-participant.ts";
import type { Participant } from "../../types";
import { Box } from "../components/Box.tsx";

export default function Register() {
  const [formData, setFormData] = useState<Participant>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    startNumber: 0,
    club: "",
    createdAt: new Date(),
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const addParticipantMutation = useAddParticipant();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await addParticipantMutation.mutateAsync(formData);
      setSuccess(true); // Set success to true on successful registration
      //setTimeout(() => navigate(ROUTE_PATHS.PARTICIPANTS_LIST), 2000); // Redirect after 2 seconds
    } catch (error) {

      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  if (success) {
    return (
        <Box className="p-7 m-7 rounded-2xl w-[25rem] shadow-md justify-center item bg-tea-green-100 relative text-center">
          <div className="text-6xl text-green-500">✔</div>
          <h1 className="font-bold font-family-serif text-4xl mt-4">Registrering vellykket!</h1>
        </Box>
    );
  }

  return (
      <Box className="p-7 m-7 rounded-2xl w-[25rem] shadow-md justify-center item bg-azure-radiance-100 relative">
        <h1 className="font-bold font-family-serif text-4xl">Påmelding</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col mt-2 font-family-serif ">
            <label htmlFor="firstName">Fornavn</label>
            <input
                className="border border-gray-500 border-solid rounded-md p-2 bg-white"
                placeholder={"Ola"}
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2 font-family-serif ">
            <label htmlFor="lastName">Etternavn</label>
            <input
                className="border border-gray-500 border-solid rounded-md p-2 bg-white"
                placeholder={"Nordmann"}
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2 font-family-serif">
            <label htmlFor="email">Email</label>
            <input
                className="border border-gray-500 border-solid  rounded-md p-2 bg-white"
                placeholder={"ola.nordmann@mail.com"}
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-2 font-family-serif">
            <label htmlFor="club">Klubb</label>
            <input
                className="border border-gray-500 border-solid  rounded-md p-2 bg-white"
                placeholder={"løpeklubben"}
                type="text"
                id="club"
                name="club"
                required
                value={formData.club}
                onChange={handleChange}
            />
          </div>
          <button
              type="submit"
              disabled={addParticipantMutation.isLoading}
              className="mt-7 w-full bg-azure-radiance-400 text-white rounded-md p-2 border-solid border font-family-serif hover:bg-azure-radiance-500"
          >
            {addParticipantMutation.isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        {error && (
            <div>
              <p>{error}</p>
            </div>
        )}
        {addParticipantMutation.isError && !error && (
            <p>Registration failed. Please try again.</p>
        )}
      </Box>
  );
}