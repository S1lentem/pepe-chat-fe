import { MountedRefsContext, RefItem } from "context/mounted-refs-context";
import { PropsWithChildren, RefObject, useRef } from "react";

export const MountedRefs = (props: PropsWithChildren) => {
    const refList = useRef<RefItem[]>([]);

    const push = (id: string, ref: RefObject<HTMLElement>) => {
        refList.current.push({ id, ref });
    }

    const remove = (id: string) => {
        refList.current = refList.current.filter((item) => item.id !== id)
    }

    const clear = () => {
        refList.current = []
    }

    const value = {
        refList,
        push,
        remove,
        clear
    }


    return (<MountedRefsContext.Provider value={value}>
        {props.children}
    </MountedRefsContext.Provider>);
}