import { UserModel } from '../../src/models/UserModel'
import { DatabaseHandler } from '../../src/services/DatabaseHandler'

jest.mock('../../src/services/DatabaseHandler')
const databaseHandler = new DatabaseHandler;
const userModel = new UserModel(databaseHandler);

const fakeResponse = {
    "user1": {
        "articles": [
            "Speaking for Dummies"
        ]
    },
    "user3": {
        "articles": [
            "Speaking for Dummies",
            "Reading for Dummies",
            "Listening for Dummies"
        ]
    }
}

describe('User Model Test', () => {
    it('Testing correct get userArticlesRead can read', async() => {
        const userId = "user1";
        (databaseHandler.getUserArticleRead as jest.Mock).mockResolvedValue(fakeResponse[userId]);
        let result, canReadTest;
        try {
            let { canRead, articlesRead }= await userModel.userArticlesRead(userId);
            // Had to create a new variable, for some unknown reason 
            // objects inside temp cannot be accessed outside of try/catch
            // will throw an undefined error. 
            result = articlesRead.articles.length;
            canReadTest = canRead;
        } catch(e) {
            console.log(e);
            expect(1).toBe(0);
        }
        expect(databaseHandler.getUserArticleRead).toHaveBeenCalled();
        expect(result).toEqual(fakeResponse[userId].articles.length);
        expect(canReadTest).toBe(true);
    })

    it('Testing correct get userArticlesRead cannot read', async() => {
        const userId = "user3";
        (databaseHandler.getUserArticleRead as jest.Mock).mockResolvedValue(fakeResponse[userId]);
        let result, canReadTest;
        try {
            let { canRead, articlesRead } = await userModel.userArticlesRead(userId);
            result = articlesRead.articles.length;
            canReadTest = canRead;
        } catch(e) {
            console.log(e);
            expect(1).toBe(0);
        }
        expect(databaseHandler.getUserArticleRead).toHaveBeenCalled();
        expect(result).toEqual(fakeResponse[userId].articles.length);
        expect(canReadTest).toBe(false);
    })

    it('Testing no user found userArticlesRead', async() => {
        const userId = "user0";
        (databaseHandler.getUserArticleRead as jest.Mock).mockResolvedValue(undefined);
        try {
            const result = await userModel.userArticlesRead(userId);
        } catch(e) {
            expect(e.message).toBe('User does not exist')
        }
    })
})