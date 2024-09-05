import { http, HttpResponse } from 'msw';
import { API_URLS } from 'api/api-endpoints';
import { AuthenticationResutl, FullUser, User } from 'types/user';
import { Chat, CreateChatData } from 'types/chat';
import { Message } from 'types/message';

export const handlers = [
    http.get(API_URLS.baseUrl + API_URLS.endpoints.users.get.all,
        () => {
            const users = [
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                    username: 'PepeChill',
                    email: 'test1@gmail.com',
                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c862d',
                    username: 'PepeSad',
                    email: 'test2@gmail.com',
                },
            ];
            return HttpResponse.json(users);
        }), 

    http.get(API_URLS.baseUrl + API_URLS.endpoints.messages.get.byChatId,
        () => {
            const now = new Date(Date.now())

            const user: User = {
                id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                username: 'PepeChill',
                email: 'test1@gmail.com',
            };
            const messages: Message[] = [
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8611',
                    user: user,
                    dateAdded: now,
                    value: 'Hello man!',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8612',
                    user: user,
                    dateAdded: now,
                    value: 'How are you?',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8611',
                    user: user,
                    dateAdded: now,
                    value: 'Hello man!',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8612',
                    user: user,
                    dateAdded: now,
                    value: 'How are you?',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8611',
                    user: user,
                    dateAdded: now,
                    value: 'Hello man!',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8612',
                    user: user,
                    dateAdded: now,
                    value: 'How are you?',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8611',
                    user: user,
                    dateAdded: now,
                    value: 'Hello man!',

                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c8612',
                    user: user,
                    dateAdded: now,
                    value: 'How are you?',

                },
            ];

            return HttpResponse.json(messages);
        }),
    

    http.get(API_URLS.baseUrl + API_URLS.endpoints.users.get.fullById,
        () => {
            const chat: Chat = {
                id: '4bbf729a-e854-41db-a691-4fd7bf7c861d',
                title: 'pepe-chat',
                descirption: 'my first chat',
                dateCreated: new Date(Date.now()),
            }

            const user : FullUser = {
                id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                username: 'PepeChill',
                email: 'test1@gmail.com',
                activeChats: [chat],
                createdChats: [chat],
            }
            
            return HttpResponse.json(user); 
        }),

    http.get(API_URLS.baseUrl + API_URLS.endpoints.chat.get.byId,
        () => {
            const chat: Chat = {
                id: '4bbf729a-e854-41db-a691-4fd7bf7c861d',
                title: 'pepe-chat',
                descirption: 'my first chat',
                dateCreated: new Date(Date.now()),
            };

            return HttpResponse.json(chat);
        }),

    http.post(API_URLS.baseUrl + API_URLS.endpoints.users.post.signIn,
        () => {
            const authResult: AuthenticationResutl = {
                id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                username: 'PepeChill',
                email: 'pepechill@gmail.com',
                token: 'token',
            }

            return HttpResponse.json(authResult);
        }),

    http.post(API_URLS.baseUrl + API_URLS.endpoints.chat.post.create,
        () => {
            const createResponse: CreateChatData = {
                description: 'some description',
                title: 'some title',
                userId: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
            };
            
            return HttpResponse.json(createResponse);
        })
]