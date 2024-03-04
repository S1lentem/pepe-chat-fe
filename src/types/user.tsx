import { Chat } from "types/chat";

export interface User {
    id: string;
    username: string;
    email: string;

}

export interface FullUser extends User {
    activeChats: Chat[];
    createdChats: Chat[];
}

export interface AuthenticationResutl extends User {
    token: string;
}

export interface CreateUserData {
    username: string,
    password: string,
    email: string,
}

export interface SignInData {
    readonly username: string;
    readonly password: string;
}