import './index.scss';
import 'styles/component.scss';

import { MessageContainer } from 'components/message';
import { useParams } from 'react-router-dom';
import { useGetMessagesByChatIdQuery } from 'hooks/api-hooks/use-messages-api';
import { useGetChatByIdQuery } from 'hooks/api-hooks/use-chats-api';
import { AnimatedContainer } from 'components/animated-container';

export const ChatView = () => {  
    const { chatId } = useParams();

    const { result: messages, queryId: messagesQueryId } = useGetMessagesByChatIdQuery(chatId!);
    const { result: chat, queryId: chatQueryId } = useGetChatByIdQuery(chatId!);

    return (
        <>
            <AnimatedContainer 
                className='title-container card'
                queryIds={[chatQueryId]}
            >
                <h1>{chat?.title}</h1>
                <p>{chat?.descirption}</p>
            </AnimatedContainer>
            <AnimatedContainer 
                className='chat-container card'
                queryIds={[messagesQueryId]}
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
            <AnimatedContainer className='input-container card'>
                <textarea></textarea>
                <button>Send</button>
            </AnimatedContainer>
        </>
    );
}