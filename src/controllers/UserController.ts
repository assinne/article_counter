import { Controller, Param, Body, Get, Post} from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/userArticleRead')
  getUser() {
    return 'This action returns article user has read';
  }
  @Post('/userArticleRead')
  post(@Body() user: any) {
    return 'This action updates article user has read';
  }
}