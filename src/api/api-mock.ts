import { http, HttpResponse } from 'msw';
import { apiUrls } from 'api/api-endpoints';
import { AuthenticationResutl, FullUser, SignInData } from 'types/user';
import { Chat } from 'types/chat';

export const handlers = [
    http.get(apiUrls.baseUrl + apiUrls.endpoints.users.get.all,
        () => {
            const users = [
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                    username: 'test1',
                    email: 'test1@gmail.com',
                },
                {
                    id: '3bbf729a-e854-41db-a691-4fd7bf7c862d',
                    username: 'test2',
                    email: 'test2@gmail.com',

                },
            ];
            return HttpResponse.json(users);
        }), 

    http.get(apiUrls.baseUrl + apiUrls.endpoints.users.get.fullById,
        () => {
            const chat: Chat = {
                id: '4bbf729a-e854-41db-a691-4fd7bf7c861d',
                title: 'pepe-chat',
                descirption: 'my first chat',
                dateCreated: new Date(Date.now()),
            }

            const user : FullUser = {
                id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                username: 'test1',
                email: 'test1@gmail.com',
                activeChats: [chat],
                createdChats: [chat],
            }
            
            return HttpResponse.json(user); 
        }),

    http.post(apiUrls.baseUrl + apiUrls.endpoints.users.post.signIn,
        () => {
            const authResult: AuthenticationResutl = {
                id: '3bbf729a-e854-41db-a691-4fd7bf7c861d',
                username: 'test1',
                email: 'test1@gmail.com',
                token: 'token',
            }

            return HttpResponse.json(authResult);
        }),
]