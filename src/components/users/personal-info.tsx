import { User } from "types/user";

interface PersonalInfoProps {
    user: User;
}


export const PersonalInfo = (props: PersonalInfoProps) => {
    const { user } = props;

    return (<>
        <h2>Username: </h2>
        <p>{user.username}</p>
        <hr />
        <h2>Email: </h2>
        <p>{user.email}</p>
        <hr />
    </>)
}