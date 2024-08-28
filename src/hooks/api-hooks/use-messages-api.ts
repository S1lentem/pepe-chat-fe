import { Message } from "types/message"
import { useAxiosQuery } from "./use-axios"
import { apiUrl } from "api/api-endpoints"

export const useGetMessagesByChatIdQuery = (id: string) => {
    return useAxiosQuery<Message[]>({
        method: axios => axios.get(apiUrl(api => api.endpoints.messages.get.byChatId, {id})),
    })
}
