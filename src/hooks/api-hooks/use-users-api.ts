import { AuthenticationResutl, CreateUserData, FullUser, SignInData, User } from "types/user";
import { useAxiosQuery, useSubmit } from "./use-axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "stores/auth-store";
import { apiUrl } from "api/api-endpoints";

export const useGetUsersQuery = () => {
    const url = apiUrl(api => api.endpoints.users.get.all)

    return useAxiosQuery<User[]>({
        method: axios => axios.get(url),
    });
}

export const useGetFullUserQuery = (id: string) => {
    const url = apiUrl(api => api.endpoints.users.get.fullById, { id });

    return useAxiosQuery<FullUser>({
        method: axios => axios.get(url),
    })
} 

export const useSignInRequest = () => {
    const dispatch = useDispatch();

    const url = apiUrl(api => api.endpoints.users.post.signIn);
    return useSubmit<SignInData, AuthenticationResutl>({
        method: (axios, data) => axios.post<AuthenticationResutl>(url, data),
        onRequestCompleted: response => dispatch(setCredentials(response)),
    });
}

export const useSignUpRequest = () => {
    const url = apiUrl(api => api.endpoints.users.post.create);

    return useSubmit<CreateUserData, User>({
        method: (axios, data) => axios.post(url, data),
    })
}
