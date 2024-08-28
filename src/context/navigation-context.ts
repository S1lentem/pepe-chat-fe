import { createContext } from "react";

export interface NextLocation {
    path: string,
    isReady: boolean,
}

export interface NavigationContext {
    currentLocation: string;
    nextLocation?: NextLocation;
    addNextLocation: (location: string ) => void;
    removeLocation: () => string;
}

export const NavigationContext = createContext<NavigationContext | undefined>(undefined);