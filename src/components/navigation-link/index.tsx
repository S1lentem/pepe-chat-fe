import { useCustomNivagate } from "hooks/use-custom-navigate";
import { PropsWithChildren } from "react";

interface NavigationLinkProps extends PropsWithChildren {
    to: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
    const navigate = useCustomNivagate();  

    return (
        <a onClick={() => navigate(props.to)}>{props.children}</a>
    )
}