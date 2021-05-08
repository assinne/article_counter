import { DatabaseHandler } from '../services/DatabaseHandler'
import { ArticlesRead, ArticlesReadResponse} from '../types/interfaces'

export class UserModel {
    private databaseHandler: DatabaseHandler;
    constructor(databaseHandler: DatabaseHandler = new DatabaseHandler) {
        this.databaseHandler = databaseHandler;
    }

    public async userArticlesRead(userId:string): Promise<ArticlesReadResponse> {
        let canRead = false;
        try {
            const articlesRead: ArticlesRead = await this.databaseHandler.getUserArticleRead(userId);
            if (!articlesRead) throw new Error('User does not exist');
            if (articlesRead.articles.length < 3) canRead = true;
            return {
                userId,
                canRead,
                articlesRead
            } as ArticlesReadResponse
        } catch(error) {
            console.error(`[UserArticlesRead] unable to fetch article for ${userId}: ${error}`);
            throw new Error(error.message);
        }
    }

}