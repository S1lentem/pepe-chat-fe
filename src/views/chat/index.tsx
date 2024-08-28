import './index.scss';
import 'styles/component.scss';

import { MessageContainer } from 'components/message';
import { useParams } from 'react-router-dom';
import { useGetMessagesByChatIdQuery } from 'hooks/api-hooks/use-messages-api';
import { useGetChatByIdQuery } from 'hooks/api-hooks/use-chats-api';

export const ChatView = () => {  
    const { chatId } = useParams();

    const messages = useGetMessagesByChatIdQuery(chatId!);
    const chat = useGetChatByIdQuery(chatId!);

    return (
        <>
            <div className='left-bounce-card title-container'>
                <h1>{chat?.title}</h1>
                <p>{chat?.descirption}</p>
            </div>
            <div className='right-bounce-card chat-container'>
                { messages ? (
                    messages.map(x => (
                        <MessageContainer 
                        key={x.id}
                        dateCreated={x.dateAdded}
                        message={x.value}
                        owner={x.user.username} 
                        />
                    ))
                ) : (
                    <div>
                        Empty
                    </div>
                )}
            </div>
            <div className='left-bounce-card input-container'>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </>
    );
}