import { useState } from "react"
import { AppInput } from "components/AppInput"
import { useCreateUserMutation } from "core/api-slicer";

import './index.scss';
import { InputFrom } from "components/InputForm";

export const SignUpView = () => {
    const [createUser] = useCreateUserMutation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const fields : JSX.Element[] = [
        <AppInput key='username' label="Username" type="text" onChange={setUsername}/>,
        <AppInput key='email' label="Email" type="text" onChange={setEmail}/>,
        <AppInput key='password' label="Password" type="password" onChange={setPassword}/>,
        <AppInput key='confirm-password' label="Confirm password" type="password" onChange={setConfirmPassword}/>
    ];

    const onSubmit = () => {
        if (password !== confirmPassword){
            alert('passwords not equal')
        } else {
            createUser({username, email, password})
                .then(result => console.log(result))
                .catch(err => {
                    if (err.response.status === 400){
                        setError(err.response.data);
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <h1>Sign-Up Page</h1>
            </div>
            {error && 
                <div>
                    {error}
                </div>
            }
            <div className="sign-up-view left-bounce">
                <InputFrom fields={fields} onSubmit={onSubmit} buttonText="Sign-Up"/>
            </div>
        </div>
    )
}