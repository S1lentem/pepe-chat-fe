import { MountedRefsContext, RefItem } from "context/mounted-refs-context";
import { PropsWithChildren, RefObject, useEffect, useState } from "react";

export const MountedRefs = (props: PropsWithChildren) => {
    const [refs, setRefs] = useState<RefItem[]>([]);

    const push = (id: string, ref: RefObject<HTMLElement>) => {
        setRefs([...refs, { id, ref }]);
    }

    const remove = (id: string) => {
        setRefs(items => items.filter(item => item.id !== id));
    }

    const clear = () => {
        setRefs([]);
    }

    const value = {
        refs,
        push,
        remove,
        clear
    }

    useEffect(() => {
        console.log(refs);
    }, [refs])

    return (<MountedRefsContext.Provider value={value}>
        {props.children}
    </MountedRefsContext.Provider>);
}