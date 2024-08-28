import { useNavigate } from "react-router-dom";
import { useNavigationContext } from "./use-contexts";

export const useCustomNivagate = () => {
    const { addNextLocation } = useNavigationContext();
    const navigate = useNavigate();

    return (location: string) => {
        addNextLocation(location);
        navigate(location);
    }
}