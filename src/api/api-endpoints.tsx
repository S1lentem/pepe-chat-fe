export const apiUrls = {
    baseUrl: 'https://localhost:7181/api/',
    endpoints: {
        users: {
            get: {
                fullById: 'users/full/:id',
                all: 'users',
            },
            post: {
                create: 'users',
                signIn: 'account/sign-in',
            },
        },
        chat: {
            post: {
                create: 'chats/create',
            }
        },
        messages: {
            get: {
                byChatId: 'messages/:id', 
            },
        },
    },
}