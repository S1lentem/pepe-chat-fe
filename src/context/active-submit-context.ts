import { createContext } from "react";

export interface ActiveSubmitContext {
    isActiveSubmitExists: boolean;
    setIsActiveSubmitExists: (value: boolean) => void;
}

export const ActiveSubmitContext = createContext<ActiveSubmitContext | undefined>(undefined);