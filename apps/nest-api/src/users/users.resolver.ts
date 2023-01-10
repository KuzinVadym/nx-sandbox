import {Inject} from '@nestjs/common';
import {UsersService} from './users.service';
import {UserModel} from './user.model';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {CreateUserInput} from './dto/users';

@Resolver(of => UserModel)
export class UsersResolver {
    constructor(
        @Inject(UsersService) private usersService: UsersService
    ) {}

    @Query(returns => UserModel)
    async user(@Args('id') id: number): Promise<UserModel> {
        return await this.usersService.findOne(id);
    }

    @Query(returns => [UserModel])
    async users(): Promise<UserModel[]> {
        return await this.usersService.find();
    }

    @Mutation(returns => UserModel)
    async createUser(
        @Args('createUserInput') createUserInput: CreateUserInput,
    ) {
        return await this.usersService.create(createUserInput);
    }

    @Mutation(returns => UserModel)
    async deleteUser(
        @Args('userId') userId: number,
    ) {
        return await this.usersService.delete(userId);
    }

}