import { Controller, Param, Get, OnUndefined} from 'routing-controllers';
import { UserModel } from '../models/UserModel';
@Controller()
export class UserController {
    private userModel: UserModel;
    constructor() {
        this.userModel = new UserModel();
    }

    @Get('/userArticleRead/:userId')
    @OnUndefined(404)
    async getUser(@Param('userId') userId: string) {
        return this.userModel.userArticlesRead(userId);
    }
}