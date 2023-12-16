import { User } from "./user";

export class Message {
    public id!: string;
    public dateAdded!: Date;
    public value!: string;
    public user!: User;
}