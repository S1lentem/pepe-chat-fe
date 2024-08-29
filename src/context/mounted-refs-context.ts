import { RefObject, createContext } from "react";

export interface RefItem {
    id: string;
    ref: RefObject<HTMLElement>;
}

export interface MountedRefsContext {
    refs: RefItem[],
    push: (id: string, ref: RefObject<HTMLElement>) => void;
    remove: (id: string) => void;
    clear: () => void;
}

export const MountedRefsContext = createContext<MountedRefsContext | undefined>(undefined);