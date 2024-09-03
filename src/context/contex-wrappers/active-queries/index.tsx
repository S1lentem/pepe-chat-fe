import { ActiveQueryContext } from "context/active-query-context";
import { PropsWithChildren, useState } from "react";

export const ActiveQueries = (props: PropsWithChildren) => {
    const [requestIds, setRequestIds] = useState<string[]>([]);
    const [isAllCompleted, setIsAllCompleted] = useState(true);

    const push = (id: string) => {
        setRequestIds([...requestIds, id]);
        if (isAllCompleted){
            setIsAllCompleted(false);
        }
    }    

    const complete = (id: string) => {
        setRequestIds(list => list.filter(item => item !== id));
        if (requestIds.length === 0){
            setIsAllCompleted(true);
        }
    }

    const isCompleted = (...ids: string[]) => {
        return ids.every(item => !requestIds.includes(item));
    }
    
    const value = {
        requestIds,
        isAllCompleted,
        push,
        complete,
        isCompleted
    };

    return <ActiveQueryContext.Provider value={value}>
        {props.children}
    </ActiveQueryContext.Provider>
}