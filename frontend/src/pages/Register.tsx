// Register.tsx
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddParticipant } from '../api/create-participant.ts';
import { Participant } from '../../types';
import { Box } from "../components/Box.tsx";
import { RegistrationCompleted } from "../components/RegistrationCompleted.tsx";

export default function Register() {
    const [formData, setFormData] = useState<Participant>({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: 0
    });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const addParticipantMutation = useAddParticipant();
    const [registrationSuccess, setRegistrationSuccess] = useState<boolean>(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            await addParticipantMutation.mutateAsync(formData);
            setRegistrationSuccess(true);
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center bg-green-100">
            <h1>Register for Bolstad Backyard Ultra</h1>
            {registrationSuccess ? (
                <RegistrationCompleted />
            ) : (
                <Box>
                    <h2 className="font-karla text-4xl">Påmelding</h2>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="firstName">Fornavn</label>
                            <input className="border border-gray-500 border-solid rounded-md p-2" placeholder={'Ola'} type="text" id="firstName" name="firstName" required
                                   value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName">Etternavn</label>
                            <input className="border border-gray-500 border-solid rounded-md p-2" placeholder={'Nordmann'} type="text" id="lastName" name="lastName" required
                                   value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input className="border border-gray-500 border-solid rounded-md p-2" placeholder={'ola.nordmann@mail.com'} type="email" id="email" name="email" required
                                   value={formData.email} onChange={handleChange} />
                        </div>
                        <button type="submit" disabled={addParticipantMutation.isLoading} className="mt-7 w-full bg-green-500 text-secondary-100 rounded-md p-2 border-solid border">
                            {addParticipantMutation.isLoading ? 'Registering...' : 'Register'}
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
            )}
        </div>
    );
}