import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field({nullable: false})
    email: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    profile: string;
}