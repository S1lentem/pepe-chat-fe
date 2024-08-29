import { useMountedRefsContext } from "hooks/use-contexts";
import { PropsWithChildren, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

interface AnimatedContainerProps extends PropsWithChildren {
    className?: string
    direction?: 'left' | 'right'
}

export const AnimatedContainer = (props: AnimatedContainerProps) => {   
    const ref = useRef<HTMLDivElement>(null);
    const mountedRefContext = useMountedRefsContext();
    
    useEffect(() => {
        const id = uuidv4();
        ref.current?.classList.add(`${props.direction ?? 'left'}-bounce`);
        mountedRefContext.push(id, ref);

        return () => {
            mountedRefContext.remove(id);
        }
    }, [])

    return (
        <div ref={ref} className={props.className}>
            {props.children}
        </div>
    );
};