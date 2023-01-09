import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersResolver} from './users.resolver';
import {PrismaClientService} from '@nx-sandbox/prisma-client';

@Module({
    imports:[],
    providers: [UsersService, UsersResolver, PrismaClientService],
    exports: [UsersService]
})
export class UsersModule {}