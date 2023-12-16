import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullUser, User } from 'core/models/user';
import type { CreateUserData } from 'core/interfaces/entities/CreateUserData';
import type { SignInData } from 'core/interfaces/entities/sign-in-data';
import type { CreateChatData } from 'core/interfaces/entities/create-chat-data';
import type { Chat } from 'core/models/chat';
import type { Message } from './models/message';

export const appApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7181/api/'}),
    endpoints: _ => ({}),
})

const useUserApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        getFullUserById: builder.query<FullUser, string>({query: (id) => `users/full/${id}`}),
        getUsers: builder.query<User[], void>({query: () => 'users'}),

        createUser: builder.mutation<User, CreateUserData>({
            query: data => ({
                url: 'users',
                method: 'POST',
                body: data,
            }),
        }),
        signIn: builder.mutation<User, SignInData>({
            query: data => ({
                url: 'account/sign-in',
                method: 'POST',
                body: data,
            }),
        }),
    })
})

const useChatApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        createChat: builder.mutation<Chat, CreateChatData>({
            query: data => ({
                url: 'chats/create',
                method: 'POST',
                body: data,
            }),
        })
    }),
});

const useMessagesApi = appApi.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query<Message[], string>({query: (id) => `messages/${id}`}),
    }),
});

export const {
    useGetUsersQuery,
    useGetFullUserByIdQuery,
    useCreateUserMutation, 
    useSignInMutation,
} = useUserApi;

export const {
    useCreateChatMutation,
} = useChatApi;

export const {
    useGetMessagesQuery,
} = useMessagesApi;