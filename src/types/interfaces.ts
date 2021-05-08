export interface ArticlesReadResponse {
    userId: string,
    canRead: boolean,
    articlesRead: ArticlesRead
}

export interface ArticlesRead {
    articles: []
}