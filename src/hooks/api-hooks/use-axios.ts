import { apiUrl } from "api/api-endpoints";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useActiveQueriesContext, useActiveSubmitContext } from "hooks/use-contexts";
import { useEffect, useState } from "react";

const AXIOS_CLIENT = axios.create({
    baseURL: apiUrl(api => api.baseUrl),
})

interface ApiData<TResponse> {
    onRequestCompleted?: (response: TResponse) => void;
}

interface ApiQueryData<TResponse> extends ApiData<TResponse> {
    method: (axiosClient: typeof AXIOS_CLIENT) => Promise<AxiosResponse<TResponse, any>>;
}

interface ApiSubmitData<TRequest, TResponse> extends ApiData<TResponse> {
    method: (axiosClient: typeof AXIOS_CLIENT, data: TRequest) => Promise<AxiosResponse<TResponse, any>>;
}

export const useAxiosQuery = <TResponse>(data: ApiQueryData<TResponse>): TResponse | undefined => {
    const [result, setResult] = useState<TResponse | undefined>();
    const context = useActiveQueriesContext();

    async function sendRequestAsync() {
        const requestId  = Math.random().toString();

        try {
            context.push(requestId);
            const response = await data.method(AXIOS_CLIENT)
            setResult(response.data);
            if (data.onRequestCompleted){
                data.onRequestCompleted(response.data);
            }

        } catch (e: any) {
            if (e instanceof AxiosError) {
                console.log(e.message)
                return;
            }

            console.error(e);
        } finally {
            context.complete(requestId);
        }
    } 

    useEffect(() => {    
        sendRequestAsync()
    }, [])

    return result;
}

export const useSubmit = <TRequest, TResponse>(data: ApiSubmitData<TRequest, TResponse>) => {
    const submitContex = useActiveSubmitContext();

    return async (request: TRequest) => {
        submitContex.setIsActiveSubmitExists(true);
        const response = await data.method(AXIOS_CLIENT, request)
        
        if (data.onRequestCompleted){
            data.onRequestCompleted(response.data);
        }

        submitContex.setIsActiveSubmitExists(false);
        return response.data;
    };
}