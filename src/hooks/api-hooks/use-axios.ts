import { apiUrl } from "api/api-endpoints";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useActiveQueriesContext, useActiveSubmitContext } from "hooks/use-contexts";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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

interface ApiResult<TResponse> {
    result?: TResponse;
}

interface ApiQueryResponse<TResponse> extends ApiResult<TResponse> {
    queryId: string;
}

interface ApiRequestResponse<TResponse> extends ApiResult<TResponse> {
    requestId: string;
}

export const useAxiosQuery = <TResponse>(data: ApiQueryData<TResponse>): ApiQueryResponse<TResponse> => {
    const [result, setResult] = useState<TResponse | undefined>();
    const context = useActiveQueriesContext();
    
    const queryId = uuidv4();

    async function sendRequestAsync() {
        try {
            context.push(queryId);
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
            context.complete(queryId);
        }
    } 

    useEffect(() => {    
        sendRequestAsync()
    }, [])

    return { result, queryId } ;
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