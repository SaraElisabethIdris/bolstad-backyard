import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';
import { useAddParticipant } from '../api/create-participant.ts';
import { Participant } from '../../types';
import styles from '../register.module.less';
import {FormProvider, useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";

export default function Register() {

    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const addParticipantMutation = useAddParticipant();

    const form = useForm<Participant>({
        defaultValues: {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            phone: 0
        },
    });

    const onSubmit = async (participant: Participant) => {
        setError(null);
        try {
            await addParticipantMutation.mutateAsync(participant);
            navigate(ROUTE_PATHS.PARTICIPANTS_LIST);

        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
            <div className={styles.container}>
                <h1>Register for Bolstad Backyard Ultra</h1>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.labelAndInput}>
                            <label htmlFor="firstName">First Name</label>
                            <input className={styles.input} type="text" id="firstName"
                                   {...form.register('firstName', {required: true})}
                            />
                        </div>
                        <div className={styles.labelAndInput}>
                            <label htmlFor="lastName">Last Name</label>
                            <input className={styles.input} type="text" id="lastName"
                                   {...form.register('lastName', {required: true})}
                            />
                        </div>
                        <div className={styles.labelAndInput}>
                            <label htmlFor="email">Email</label>
                            <input className={styles.input} type="email" id="email"
                                   {...form.register('email', {required: true})}
                            />
                        </div>
                        <div className={styles.labelAndInput}>
                            <label htmlFor="phone">Phone</label>
                            <input className={styles.input} type="text" id="phone"
                                   {...form.register('phone', {required: true})}
                            />
                        </div>
                        <button type="submit" disabled={addParticipantMutation.isLoading}>
                            {addParticipantMutation.isLoading ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                    <DevTool control={form.control} />
                </FormProvider>
                {error && (
                    <div className={styles.errorPopup}>
                        <p className={styles.errorPopup}>{error}</p>
                    </div>
                )}
                {addParticipantMutation.isError && !error && (
                    <p>Registration failed. Please try again.</p>
                )}
            </div>
    );
}