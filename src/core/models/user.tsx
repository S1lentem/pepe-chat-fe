import { Chat } from "./chat";

export class User {
    id!: string;
    username!: string;
    email!: string;
    
    constructor(id: string, username: string, email: string){
        this.id = id;
        this.username = username;
        this.email = email;
    }
}

export class FullUser extends User {
    activeChats: Chat[] = [];
    createdChats: Chat[] = [];
}

export class AuthenticationResutl extends User {
    token!: string;
}