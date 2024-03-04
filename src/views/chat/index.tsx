import './index.scss';
import { useGetMessagesQuery } from 'api/api-slicer';

export const ChatView = (chatId: string) => {  
    const {data: messages} = useGetMessagesQuery(chatId);

    return (
        <div className=''>

        </div>
    );
}