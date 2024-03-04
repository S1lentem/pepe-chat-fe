import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullUser, User, CreateUserData, SignInData } from 'types/user';
import type { Chat, CreateChatData } from 'types/chat';
import type { Message } from 'types/message';
import { setCredentials } from 'stores/auth-store';
import { RootState } from 'stores/store';

export const appApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7181/api/',
        credentials: 'include',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: _ => ({}),

})

const useAuthApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<User, SignInData>({
            query: data => ({
                url: 'account/sign-in',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(_arg, {dispatch, queryFulfilled}){
                const response = await queryFulfilled;
                dispatch(setCredentials(response.data));
            }
        }),
    }),
});

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
    useSignInMutation
} = useAuthApi;

export const {
    useGetUsersQuery,
    useGetFullUserByIdQuery,
    useCreateUserMutation,
} = useUserApi;

export const {
    useCreateChatMutation,
} = useChatApi;

export const {
    useGetMessagesQuery,
} = useMessagesApi;