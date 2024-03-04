export interface Chat {
    id: string;
    title: string;
    descirption: string;
    dateCreated: Date;
}

export interface CreateChatData{
    title: string;
    description: string;
    userId: string;
}