import { ActiveQueryContext } from "context/active-query-context"
import { ActiveSubmitContext } from "context/active-submit-context";
import { MountedRefsContext } from "context/mounted-refs-context";
import { NavigationContext } from "context/navigation-context";
import { useContext } from "react";


export const useActiveQueriesContext = (): ActiveQueryContext => {
    const activeRequestContext = useContext(ActiveQueryContext);
    if (!activeRequestContext){
        throw new Error('useActiveRequestsContext ust be used within a ActiveQueris component');
    }

    return activeRequestContext;
}

export const useActiveSubmitContext = (): ActiveSubmitContext => {
    const activeSubmitContext = useContext(ActiveSubmitContext);
    if (!activeSubmitContext){
        throw new Error('useActiveSubmitContext ust be used within a ActiveSubmites component');
    }

    return activeSubmitContext;
}

export const useNavigationContext = (): NavigationContext => {
    const navigationContext = useContext(NavigationContext);
    if (!navigationContext){
        throw new Error('useNavigationContext ust be used within a AnimatedNavigation component');
    }

    return navigationContext;
}

export const useMountedRefsContext = (): MountedRefsContext => {
    const mountedRefsContext = useContext(MountedRefsContext);

    if (!mountedRefsContext){
        throw new Error('useMountedRefsContext ust be used within a MountedRefs component');
    }

    return mountedRefsContext;
}