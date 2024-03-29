import { useState } from "react";
import { AppInput } from "components/app-input";

import './index.scss';
import { InputFrom } from "components/input-form";
import { useSignInMutation } from "api/api-slicer";
import { useNavigate } from "react-router-dom";

export const SignInView = () => {
    const navigate = useNavigate();

    const [signIn] = useSignInMutation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');
    const [, setIsLoading] = useState(false); 

    const onSubmit = () => {
        setIsLoading(true);
        signIn({username, password}).then(result => {
            navigate('/profile');
        })
        .catch(err => {
            if (err.response.status === 400){
                setError(err.response.data);
            }
        })
        .finally(() => setIsLoading(false))     
    }

    return (
    <div>
        <div>
            <h1>Sign-In Page</h1>
        </div>
        {error && 
            <div className="error-desc">
                {error}
            </div>}
        <div className="left-bounce">
            <InputFrom onSubmit={onSubmit} buttonText="Sign-In">
                <AppInput key="username" label="Username" type="text" onChange={setUsername} />
                <AppInput key="password" label="Password" type="password" onChange={setPassword} />
            </InputFrom>
        </div>
    </div>
    );
}