import {Inject} from '@nestjs/common';
import {UsersService} from './users.service';
import {UserModel} from './user.model';
import {Args, Query, Resolver} from '@nestjs/graphql';

@Resolver(of => UserModel)
export class UsersResolver {
    constructor(
        @Inject(UsersService) private usersService: UsersService
    ) {
    }

    @Query(returns => UserModel)
    async user(@Args('id') id: string): Promise<UserModel> {
        return await this.usersService.findOne(id);
    }
}