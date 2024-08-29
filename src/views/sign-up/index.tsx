import { useState } from "react";
import { AppInput } from "components/app-input";
import { InputFrom } from "components/input-form";

import './index.scss';
import { useSignUpRequest } from "hooks/api-hooks/use-users-api";
import { AnimatedContainer } from "components/animated-container";

export const SignUpView = () => {
    const createUser = useSignUpRequest();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = () => {
        if (password !== confirmPassword){
            alert('passwords not equal')
        } else {
            createUser({username, email, password})
                .then(result => {});
        }
    }

    return (
        <div>
            <AnimatedContainer>
                <h1>Sign-Up Page</h1>
            </AnimatedContainer>
            <AnimatedContainer className='sign-up-view'>
                <InputFrom onSubmit={onSubmit} buttonText="Sign-Up">
                    <AppInput key='username' label="Username" type="text" onChange={setUsername}/>
                    <AppInput key='email' label="Email" type="text" onChange={setEmail}/>
                    <AppInput key='password' label="Password" type="password" onChange={setPassword}/>
                    <AppInput key='confirm-password' label="Confirm password" type="password" onChange={setConfirmPassword}/>
                </InputFrom>
            </AnimatedContainer>
        </div>
    )
}