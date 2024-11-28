import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { App } from './App';
import {AuthProvider} from "./components/AuthProvider.tsx";
import {ToastContainer} from "react-toastify";


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
        <App />
            <ToastContainer />
        </AuthProvider>
    </StrictMode>
);