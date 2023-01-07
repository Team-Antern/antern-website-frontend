import React, { createContext, useState } from "react";
import { useRef } from "react";

export const LoadingContext = createContext<
    [Boolean, () => void, () => void] | []
>([]);

interface LoadingContextProviderProps {
    children: React.ReactNode;
}

const LoadingContextProvider = ({ children }: LoadingContextProviderProps) => {
    const [loading, setLoading] = useState(false);
    const apiCallsInProgress = useRef(0);

    const startApiCall = () => {
        apiCallsInProgress.current += 1;
        setLoading(true);
    };

    const finishApiCall = () => {
        apiCallsInProgress.current -= 1;
        if (apiCallsInProgress.current === 0) {
            setLoading(false);
        }
    };

    return (
        <LoadingContext.Provider value={[loading, startApiCall, finishApiCall]}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContextProvider;
