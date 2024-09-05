import './index.scss';
import 'styles/component.scss';

import { MessageContainer } from 'components/message';
import { useParams } from 'react-router-dom';
import { useGetMessagesByChatIdQuery } from 'hooks/api-hooks/use-messages-api';
import { useGetChatByIdQuery } from 'hooks/api-hooks/use-chats-api';
import { AnimatedContainer } from 'components/animated-container';
import { useState } from 'react';
import { AppAreaInput } from 'components/app-area-unput';

export const ChatView = () => {  
    const { chatId } = useParams();

    const { result: messages, queryId: messagesQueryId } = useGetMessagesByChatIdQuery(chatId!);
    const { result: chat, queryId: chatQueryId } = useGetChatByIdQuery(chatId!);

    const [message, setMessage] = useState('');

    return (
        <div className='chat-container'>
            <AnimatedContainer 
                className='chat-info'
                queryIds={[chatQueryId]}
                direction='right'
            >
                <h1>{chat?.title}</h1>
                <p>{chat?.descirption}</p>
            </AnimatedContainer>
            <AnimatedContainer 
                className='messages-container card'
                queryIds={[messagesQueryId]}
                direction='left'
            >
                {   
                    messages && messages.map(x => (
                        <MessageContainer 
                            key={x.id}
                            dateCreated={x.dateAdded}
                            message={x.value}
                            owner={x.user.username} 
                        />
                    ))
                }
            </AnimatedContainer>
            <AnimatedContainer 
                className='chat-controls'
                direction='right'
            >
                <AppAreaInput onChanges={setMessage} />
                <button>Send</button>
            </AnimatedContainer>
        </div>
    );
}