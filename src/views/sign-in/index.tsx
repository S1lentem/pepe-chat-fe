import { useState } from "react";
import { AppInput } from "components/app-input";

import './index.scss';
import { InputFrom } from "components/input-form";
import { useCustomNivagate } from "hooks/use-custom-navigate";
import { useSignInRequest } from "hooks/api-hooks/use-users-api";
import { AnimatedContainer } from "components/animated-container";

export const SignInView = () => {
    const navigate = useCustomNivagate();
    const signIn = useSignInRequest()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const onSubmit = () => {
        signIn({username, password}).then(_ => {
            navigate('/profile');
        });
    }

    return (
        <AnimatedContainer>
            <InputFrom onSubmit={onSubmit} buttonText="Sign-In">
                <div>
                    <h1>Sign-In Page</h1>
                </div>
                <AppInput key="username" label="Username" type="text" onChange={setUsername} />
                <AppInput key="password" label="Password" type="password" onChange={setPassword} />
            </InputFrom>
        </AnimatedContainer>
    );
}