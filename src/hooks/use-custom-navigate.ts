import { useNavigate } from "react-router-dom";
import { useMountedRefsContext } from "./use-contexts";

const IN_ANIMATION_CLASSES = ['left-bounce', 'right-bounce'];
const OUT_ANIMATION_CLASSES = ['left-bounce-out', 'right-bounce-out'];

export const useCustomNivagate = () => {
    const navigate = useNavigate();
    const mountedRefs = useMountedRefsContext();

    return (location: string) => {
        const refList = mountedRefs.refList.current;
        
        if (!refList.length){
            navigate(location);
        }

        const activeAnimations: Promise<any>[] = [];

        refList.forEach(item => {
            if (item.ref.current){
                item.ref.current.classList.remove(...IN_ANIMATION_CLASSES);
                item.ref.current.classList.add(OUT_ANIMATION_CLASSES[0]);

                activeAnimations.push(...item.ref.current.getAnimations().map(a => a.finished));
            }
        })

        Promise.all(activeAnimations).then(() => {
            navigate(location)
        });
    }
}