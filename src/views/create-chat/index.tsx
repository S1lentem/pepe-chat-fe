import { useState } from "react";
import { AppInput } from "components/app-input";
import { InputFrom } from "components/input-form";

import './index.scss';
import { useCustomNivagate } from "hooks/use-custom-navigate";
import { useCreateChatRequest } from "hooks/api-hooks/use-chats-api";
import { AnimatedContainer } from "components/animated-container";

export const CreateChatView = () => {
    const navigate = useCustomNivagate();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    const createChat = useCreateChatRequest();

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
            <AnimatedContainer className="left-bounce">
                <InputFrom onSubmit={submitData} buttonText="Create chat">
                    <AppInput label="Title" type="text" key="title" onChange={setTitle} />
                    <AppInput label="Descirption" type="text" key="description" onChange={setDescription}/>
                </InputFrom>
            </AnimatedContainer>
        </div>
    );
}