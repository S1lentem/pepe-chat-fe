import { useCustomNivagate } from "hooks/use-custom-navigate";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "stores/auth-store";

export const SignOut = () => {
    const dispatch = useDispatch();
    const navigate = useCustomNivagate();
    dispatch(logOut());

    useEffect(() => navigate('/home'));

    return (<></>)
};