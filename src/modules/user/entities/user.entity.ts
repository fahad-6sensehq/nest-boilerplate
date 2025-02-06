import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole', })
    userRoleId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);