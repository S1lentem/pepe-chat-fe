import './index.scss';
import { useGetMessagesQuery } from 'core/api-slicer';

export const ChatView = (chatId: string) => {  
    const {data: messages} = useGetMessagesQuery(chatId);

    return (
        <div className=''>

        </div>
    );
}