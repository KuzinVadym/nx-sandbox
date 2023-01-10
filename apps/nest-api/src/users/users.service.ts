import {Injectable} from '@nestjs/common';
import {UserModel} from './user.model';
import {PrismaClientService} from '@nx-sandbox/prisma-client';
import {InjectPinoLogger, PinoLogger} from 'nestjs-pino';

@Injectable()
export class UsersService {

    constructor(
        @InjectPinoLogger(PrismaClientService.name) private readonly logger: PinoLogger,
        private prisma: PrismaClientService
    ) {}

    async findOne(id: number): Promise<UserModel> {
        const findOneResult = await this.prisma.user.findUnique({
            where: {
                id
            },
        })

        console.log('findOneResult');
        console.log(findOneResult);

        return findOneResult;
    }

    async find(): Promise<UserModel[]> {
        const findResult = await this.prisma.user.findMany();

        console.log('findResult');
        console.log(findResult);

        return findResult;
    }

    async create(payload: Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserModel> {
        const createResult = await this.prisma.user.create({
            data: payload
        });

        console.log('createResult');
        console.log(createResult);

        return createResult;
    }

    async delete(id: number): Promise<UserModel> {
        const deleteResult = await this.prisma.user.delete({
            where: {
                id
            }
        });

        console.log('deleteResult');
        console.log(deleteResult);

        return deleteResult;
    }
}