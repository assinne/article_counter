import { DatabaseHandler } from '../../src/services/DatabaseHandler'
const databaseHandler = new DatabaseHandler;

const fakeResponse = {
    "articles": [
        "Speaking for Dummies"
    ]
}

describe('DatabaseHandler', () => {
    
    it('Testing correct getUserArticleRead', async() => {
        const userId = "user1";
        spyOn(databaseHandler, 'fakeDatabaseResponse').and.returnValue(fakeResponse);
        let result
        try {
            result = await databaseHandler.getUserArticleRead(userId);
        } catch(e) {
            console.log(e);
            expect(1).toBe(0);
        }
        expect(result).toEqual(fakeResponse);
    })
})