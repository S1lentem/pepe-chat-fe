import { NavigationContext, NextLocation } from "context/navigation-context";
import { PropsWithChildren, useEffect, useState } from "react";
import { matchPath } from "react-router-dom";
import { ROUTES } from "route/route";

export const AnimatedNavigation = (props: PropsWithChildren) => {
    const [currentLocation, setCurrentLocation] = useState('/');
    const [nextLocation, setNextLocation] = useState<NextLocation | undefined>();

    const removeLocation = (): string => {
        if (!nextLocation) {
            throw new Error('next location does not exists');
        }

        setCurrentLocation(nextLocation.path);
        setNextLocation(undefined);
        return nextLocation.path;
    }

    const addNextLocation = (location: string) => {
        setNextLocation({ path: location, isReady: false});
    }

    useEffect(() => {
        if (nextLocation){
            const locationData = ROUTES.find(x => matchPath(x, nextLocation.path));
        }
    }, [nextLocation]);

    useEffect(() => {

    });
    
    const providerValue = { currentLocation, nextLocation, addNextLocation, removeLocation}
    return (
        <NavigationContext.Provider value={providerValue}>
            {props.children}
        </NavigationContext.Provider>
    )
}