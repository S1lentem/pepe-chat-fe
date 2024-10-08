import "./index.scss";
import { Chat } from "types/chat";

import { useCustomNivagate } from "hooks/use-custom-navigate";
import { useGetFullUserQuery } from "hooks/api-hooks/use-users-api";
import { AnimatedContainer } from "components/animated-container";
import { PersonalInfo } from "components/users/personal-info";

const renderChats = (chats: Chat[], navigate: (to: string) => void) => {
    if (chats.length === 0){
        return (
            <div>
                Chats are not exists in this topic
            </div>
        );
    }

    return ( 
        <ul className="chat-list">
            {
                chats.map(chat => 
                <li key={chat.id} 
                    className="chat-list-item"
                    onClick={_ => navigate(`/chat/${chat.id}`)}>{chat.title}
                </li>)
            }
        </ul>  
    );
}

export const ProfileView = () => {
    const navigate = useCustomNivagate();
    const { result: user, queryId } = useGetFullUserQuery('3a304152-b273-410d-36cb-08dc1d89eac5');
    return (
        <div className="page-container">
            {user && (
                <div className="profile-container">
                    <AnimatedContainer 
                        className='personal-info'
                        queryIds={[queryId]} 
                    >
                        <PersonalInfo user={user} />
                    </AnimatedContainer>
                    <AnimatedContainer 
                        className="chats-info" 
                        direction='right'
                        queryIds={[queryId]}
                    >
                        <div className="active-chats">
                            <h1>Active chats:</h1>
                            {renderChats(user!.activeChats, navigate)}
                        </div>
                        <hr/>
                        <div className="created-chats">
                            <h1>Created chats:</h1>
                            {renderChats(user!.createdChats, navigate)}
                        </div>
                        <hr />
                        <div>
                            <button onClick={e => navigate("/create-chat")}>Create Chat</button>
                        </div>
                    </AnimatedContainer>
                </div>
            )}
        </div>
    )
}