import "./index.scss";
import { Chat } from "types/chat";

import { useCustomNivagate } from "hooks/use-custom-navigate";
import { useGetFullUserQuery } from "hooks/api-hooks/use-users-api";

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
    const user = useGetFullUserQuery('3a304152-b273-410d-36cb-08dc1d89eac5');
    return (
        <div className="page-container">
            {
                user ? (
                    <div className="profile-container">
                        <div className="personal-info left-bounce">
                            <h2>Username: </h2>
                            <p>{user!.username}</p>
                            <hr />
                            <h2>Email: </h2>
                            <p>{user!.email}</p>
                            <hr />
                        </div>
                        <div className="chats-info right-bounce">
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
                        </div>
                    </div>
                ) : (
                    <div>
                    
                    </div>
                )
            }
        </div>
    )
}