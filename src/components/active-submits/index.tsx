import { ActiveSubmitContext } from "context/active-submit-context";
import { PropsWithChildren, useState } from "react";

export const ActiveSubmites = (props: PropsWithChildren) => {
    const [isActiveSubmitExists, setIsActiveSubmitExists] = useState(false);

    const value = {
        isActiveSubmitExists,
        setIsActiveSubmitExists,
    }

    return <ActiveSubmitContext.Provider value={value}>
        {props.children}
    </ActiveSubmitContext.Provider>
}