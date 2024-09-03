import { createContext } from "react";

export interface ActiveQueryContext {
    requestIds: string[];
    isAllCompleted: boolean;
    push: (id: string) => void;
    complete: (id: string) => void;
    isCompleted: (...ids: string[]) => boolean;
}

export const ActiveQueryContext = createContext<ActiveQueryContext | undefined>(undefined);