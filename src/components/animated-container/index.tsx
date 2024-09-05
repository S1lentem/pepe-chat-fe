import { useActiveQueriesContext, useMountedRefsContext } from "hooks/use-contexts";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import 'styles/common.scss'

const DEFAULT_DIRECTION = 'left';
const HIDDEN_CLASS_NAME = 'hidden';

interface AnimatedContainerProps extends PropsWithChildren {
    className?: string;
    direction?: 'left' | 'right';
    queryIds?: string[];
}

export const AnimatedContainer = (props: AnimatedContainerProps) => {
    const [isReadyToAnimaton, setIsReadyToAnimation] = useState(false); 
    const ref = useRef<HTMLDivElement>(null);
    const mountedRefContext = useMountedRefsContext();
    const activeQueriesContext = useActiveQueriesContext();
    
    useEffect(() => {
        const id = uuidv4();

        mountedRefContext.push(id, ref);
        return () => {
            mountedRefContext.remove(id);
        }
    }, [])

    useEffect(() => {
        if (ref.current && (!props.queryIds || activeQueriesContext.isCompleted(...props.queryIds))){
            ref.current.classList.remove(HIDDEN_CLASS_NAME);
            ref.current.classList.add(`${props.direction ?? DEFAULT_DIRECTION}-bounce`);
        }
    }, [activeQueriesContext.requestIds]);

    return (
        <div ref={ref} className={`${props.className} ${HIDDEN_CLASS_NAME}`}>
            {props.children}
        </div>
    );
};