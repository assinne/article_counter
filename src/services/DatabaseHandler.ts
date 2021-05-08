
// I have called this database for all intent and purpose it could be firestore
export class DatabaseHandler {
    public async getUserArticleRead(userId: string) {
        try {
            return this.fakeDatabaseResponse(userId);
        } catch(error) {
            console.error(`[getUserArticleRead] unable to fetch article from db ${userId}: ${error}`);
            throw new Error(error.message);
        }
    }

    public fakeDatabaseResponse(userId: string) {
        // Not a correct db structure but for simplicity
        const fakeResponse: any = {
            "user1": {
                "articles": [
                    "Speaking for Dummies"
                ]
            },
            "user2": {
                "articles": [
                    "Speaking for Dummies",
                    "Reading for Dummies"
                ]
            },
            "user3": {
                "articles": [
                    "Speaking for Dummies",
                    "Reading for Dummies",
                    "Listening for Dummies"
                ]
            },
            "user4": {
                "articles": []
            }
        }
        return fakeResponse[userId];
    }
}