import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field()
    id: number;

    @Field({nullable: false})
    email: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    profile: string;

    @Field({defaultValue: new Date(Date.now()), nullable: true})
    createdAt: Date;

    @Field({nullable: true})
    updatedAt: Date;
}