import { Controller, Param, Body, Get, Post, OnUndefined} from 'routing-controllers';
import { UserModel } from '../models/UserModel';
@Controller()
export class UserController {
  private userModel;
  constructor() {
    this.userModel = new UserModel();
  }

  @Get('/userArticleRead/:userId')
  @OnUndefined(404)
  async getUser(@Param('userId') userId: string) {
    let response;
    if (userId) {
      response = await this.userModel.userArticlesRead(userId);
    } else {

    }
    return response;
  }
  @Post('/userArticleRead')
  post(@Body() user: any) {
    return 'This action updates article user has read';
  }
}