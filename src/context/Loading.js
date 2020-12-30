import React, { useContext, useState, createContext} from 'react';

const LoadingContext = createContext();


export default function LoadingContextProvider({children}){
    const [isLoading, setLoading] = useState(true);

    return(
        <LoadingContext.Provider value={{
            isLoading,
            setLoading
        }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading(){
    const context = useContext(LoadingContext);
    if(!context) throw new Error("useLoading must be used with a LoadingContextProvider");
    const {isLoading, setLoading} = context;
    return {isLoading, setLoading};
}

