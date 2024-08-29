import { useMountedRefsContext } from "hooks/use-contexts";
import { PropsWithChildren, useEffect } from "react";

export const AnimatedMainLayout = (porps: PropsWithChildren) => {
    const mountedRefsContext = useMountedRefsContext();

    return <>
        {porps.children}
    </>
}