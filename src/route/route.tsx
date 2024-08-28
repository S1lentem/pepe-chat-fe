import { useRoutes } from "react-router-dom";
import { ChatView } from "views/chat";
import { CreateChatView } from "views/create-chat";
import { HomeView } from "views/home";
import { ProfileView } from "views/profile";
import { SignInView } from "views/sign-in";
import { SignOut } from "views/sign-out";
import { SignUpView } from "views/sign-up";

export const ROUTES = [
    {
        path: '/',
        element: <HomeView />
    },
    {
        path: 'home',
        element: <HomeView />
    },
    {
        path: 'signup',
        element: <SignUpView />
    },
    {
        path: 'signin',
        element: <SignInView />
    },
    {
        path: 'profile',
        element: <ProfileView />
    },
    {
        path: 'create-chat',
        element: <CreateChatView />
    },
    {
        path: 'signout',
        element: <SignOut />
    },
    {
        path: 'chat/:chatId',
        element: <ChatView />
    }
]

export const Routers = () => {
    return useRoutes(ROUTES);
}