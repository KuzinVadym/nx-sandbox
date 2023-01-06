import {Injectable} from '@nestjs/common';
import {UserModel} from './user.model';

@Injectable()
export class UsersService {
    async findOne(id: string): Promise<UserModel> {
        return {id: 'id', name: 'name'}
    }
}