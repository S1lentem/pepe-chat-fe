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
            const element = item.ref.current;

            if (element){
                const currentAnimationClassName = Array.from(element.classList.values())
                    .find(c => IN_ANIMATION_CLASSES.includes(c))!;
                element.classList.remove(currentAnimationClassName);

                const newAnimationClassName = OUT_ANIMATION_CLASSES.find(x => x.startsWith(currentAnimationClassName))!;
                element.classList.add(newAnimationClassName);

                activeAnimations.push(...element.getAnimations().map(a => a.finished));
            }
        })

        Promise.all(activeAnimations).then(() => {
            navigate(location)
        });
    }
}