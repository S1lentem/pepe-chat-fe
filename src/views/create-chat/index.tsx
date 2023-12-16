import { useState } from "react";
import { AppInput } from "components/AppInput";
import { useNavigate } from "react-router-dom";
import { InputFrom } from "components/InputForm";

import './index.scss';
import { useCreateChatMutation } from "core/api-slicer";

export const CreateChatView = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    const [createChat] = useCreateChatMutation();

    const fields: JSX.Element[] = [
        <AppInput label="Title" type="text" key="title" onChange={setTitle} />,
        <AppInput label="Descirption" type="text" key="description" onChange={setDescription}/>
    ]

    const isDisabledButton = !title && !description 

    const prepareRequestData = () => {
        return {title, description, userId: "509f2ffe-3ae3-4116-a17a-562d43e9dcd9"};
    }


    const submitData = () => {
        const preparedData = prepareRequestData()

        createChat(preparedData)
            .then(() => navigate("/profile"))
            .catch(error => {
                if (error.response.status === 400){
                    setError(error.response.data);
                }
            });
    }

    return (
        <div>
            <h1>Create Chat:</h1>
            {error && 
                <div className="error-desc">
                    {error}
                </div>}
            <div className="left-bounce">
                <InputFrom fields={fields} onSubmit={submitData} buttonText="Create chat"/>
            </div>
        </div>
    );
}