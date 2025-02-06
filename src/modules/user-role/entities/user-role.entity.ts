import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type UserRoleDocument = UserRole & mongoose.Document;

@Schema()
export class UserRole {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId: string;
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Role'})
    roleId: string;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);