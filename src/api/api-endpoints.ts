const HOST = 'https://localhost:7181';

export const HUB_URL = `${HOST}/hub`;

export const API_URLS = {
    baseUrl: `${HOST}/api`,
    endpoints: {
        users: {
            get: {
                fullById: '/users/full/:id',
                all: '/users',
            },
            post: {
                create: '/users',
                signIn: '/account/sign-in',
            },
        },
        chat: {
            get: {
                byId: '/chats/:id',
            },
            post: {
                create: '/chats/create',
            }
        },
        messages: {
            get: {
                byChatId: '/messages/:id', 
            },
        },
    },    
}

export const apiUrl = (
    selector: (api: typeof API_URLS) => string, 
    data?: any
) => {
    const pattern = selector(API_URLS);

    if (!data){
        return pattern;
    }

    return pattern.split('/').map(item => {
        if (!item.startsWith(':')){
            return item;
        }
        
        return data[item.substring(1, item.length)];
    }).join('/')
}