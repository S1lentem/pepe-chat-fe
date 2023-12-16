import { http, HttpResponse } from 'msw';
import { apiUrls } from 'core/api-endpoints';
import { FullUser, User } from 'core/models/user';
import { Chat } from './models/chat';

export const handlers = [
    http.get(apiUrls.baseUrl + apiUrls.endpoints.users.get.all,
        () => {
            const users = [
                new User('3bbf729a-e854-41db-a691-4fd7bf7c861d', 'test1', 'test1@gmail.com'),
                new User('3bbf729a-e854-41db-a691-4fd7bf7c862d', 'test2', 'test2@gmail.com'),
            ];
            return HttpResponse.json(users);
        }), 

    http.get(apiUrls.baseUrl + apiUrls.endpoints.users.get.fullById,
        () => {
            let user = new FullUser('3bbf729a-e854-41db-a691-4fd7bf7c861d', 'test1', 'test1@gmail.com')
            
            const chat1 = new Chat();
            chat1.id = '4bbf729a-e854-41db-a691-4fd7bf7c861d';
            chat1.title = 'pepe-chat';
            chat1.descirption = 'my first chat';
            chat1.dateCreated = new Date(Date.now());


            user.activeChats = [chat1];
            user.createdChats = [chat1];

            return HttpResponse.json(user); 
        }),
]