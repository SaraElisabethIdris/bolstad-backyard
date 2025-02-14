// Register.tsx
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';
import { useAddParticipant } from '../api/create-participant.ts';
import { Participant } from '../../types';
import styles from '../register.module.less';
import { Box} from "../components/Box.tsx";

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
            <div className="flex flex-col items-center">
                <h1>Register for Bolstad Backyard Ultra</h1>
                <Box className="p-7 m-7 rounded-2xl w-[25rem]">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className={styles.labelAndInput}>
                        <label htmlFor="firstName">First Name</label>
                        <input className={styles.input} type="text" id="firstName" name="firstName" required
                               value={formData.firstName} onChange={handleChange}/>
                    </div>
                    <div className={styles.labelAndInput}>
                        <label htmlFor="lastName">Last Name</label>
                        <input className={styles.input} type="text" id="lastName" name="lastName" required
                               value={formData.lastName} onChange={handleChange}/>
                    </div>
                    <div className={styles.labelAndInput}>
                        <label htmlFor="email">Email</label>
                        <input className={styles.input} type="email" id="email" name="email" required
                               value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className={styles.labelAndInput}>
                        <label htmlFor="phone">Phone</label>
                        <input className={styles.input} type="text" id="phone" name="phone" required
                               value={formData.phone} onChange={handleChange}/>
                    </div>
                    <button type="submit" disabled={addParticipantMutation.isLoading} className="mt-7 w-full bg-test text-secondary-100 rounded-md p-2">
                        {addParticipantMutation.isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                {error && (
                    <div className={styles.errorPopup}>
                        <p className={styles.errorPopup}>{error}</p>
                    </div>
                )}
                {addParticipantMutation.isError && !error && (
                    <p>Registration failed. Please try again.</p>
                )}
                </Box>
            </div>
    );
}