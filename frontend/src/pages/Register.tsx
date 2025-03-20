import { ChangeEvent, FormEvent, useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../constants";
import { useAddParticipant } from "../api/create-participant.ts";
import { Participant } from "../../types";
import { Box } from "../components/Box.tsx";
import KryssIkon from "../img/kryss-ikon.svg?react";

type Props = {
  setIsModalOpen: (value: boolean) => void;
};

export default function Register({ setIsModalOpen }: Props) {
  const [formData, setFormData] = useState<Participant>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const addParticipantMutation = useAddParticipant();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await addParticipantMutation.mutateAsync(formData);
      navigate(ROUTE_PATHS.PARTICIPANTS_LIST);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box className="p-7 m-7 rounded-2xl w-[25rem] shadow-md justify-center item bg-azure-radiance-100 relative">
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 m-2"
      >
        <KryssIkon />
      </button>
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
