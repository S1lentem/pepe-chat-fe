import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "stores/auth-store";

export const SignOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(logOut());

    useEffect(() => navigate('/home'));
};