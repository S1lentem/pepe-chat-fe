import { Chat, CreateChatData } from "types/chat"
import { useAxiosQuery, useSubmit } from "./use-axios"
import { apiUrl } from "api/api-endpoints"

export const useGetChatByIdQuery = (id: string) => {
    const url = apiUrl(api => api.endpoints.chat.get.byId, { id });

    return useAxiosQuery<Chat>({
        method: axios => axios.get(url),
    })
}

export const useCreateChatRequest = () => {
    const url = apiUrl(api => api.endpoints.chat.post.create);

    return useSubmit<CreateChatData, Chat>({
        method: (axios, data) => axios.post(url, data),
    })
}