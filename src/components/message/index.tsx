
import dayjs from 'modules/dayjs';
import './index.scss';


interface MessageData {
    message: string;
    dateCreated: Date;
    owner: string;
}

export const MessageContainer = (message: MessageData) => {
    return (
        <div className='message-container'>
            <div className='message-owner'>
                <span>{message.owner}</span>
            </div>
            
            <div>
                {message.message}
            </div>
            <span className='message-date'>{dayjs(message.dateCreated).format('DD.MM.YYYY HH:mm')}</span>
        </div>
    )
}