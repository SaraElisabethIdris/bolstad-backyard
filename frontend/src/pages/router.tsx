import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([

    {
        path: '',
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTE_PATHS.APPROVE,
                lazy: () => import('./pages/Register'),
            },
    }
]);


export function Router() {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<Spinner large />}
            future={{ v7_startTransition: true }}
        />
    );
}