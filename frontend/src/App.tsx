import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {Router} from "./pages/router";
import styles from "./app.module.less";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

export function App() {
    return (
        <div id="app" className={styles}>
                    <QueryClientProvider client={queryClient}>
                        <Router />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
        </div>
    );
}
