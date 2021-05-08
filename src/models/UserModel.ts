import { DatabaseHandler } from '../services/DatabaseHandler'

export class UserModel {
    private databaseHandler;
    constructor() {
        this.databaseHandler = new DatabaseHandler;
    }

    public async userArticlesRead(userId:string) {
        let canRead = false;
        try {
            const articlesRead = await this.databaseHandler.getUserArticleRead(userId);
            if (!articlesRead) throw new Error('User does not exist');
            if (articlesRead.articles.length < 3) canRead = true;
            return {
                userId,
                canRead,
                articlesRead
            }
        } catch(error) {
            console.error(`[UserArticlesRead] unable to fetch article for ${userId}: ${error}`);
            throw new Error(error.message);
        }
    }

}