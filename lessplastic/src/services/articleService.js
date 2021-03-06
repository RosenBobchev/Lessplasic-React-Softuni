import remote from './remote'

let articleService = (() => {

    function createArticle(title, articleImage, content, contentImage, additionalContent, additionalImage, type) {
        const authorId = sessionStorage.getItem('userId');
        let obj = { title, articleImage, content, contentImage, additionalContent, additionalImage, type, approved: false, authorId: authorId, views: 0 };

        return remote.post('appdata', 'articles', 'kinvey', obj)
    }

    function deleteArticle(articleId) {
        const authorId = sessionStorage.getItem('userId');

        const endpoint = `articles?query={"_acl.creator":"${authorId}", "_id":"${articleId}"}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getArticle(articleId) {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        const endpoint = `articles?query={"_id":"${articleId}"}`;

        return remote.get('appdata', endpoint, 'guest', data);
    }

    function getAllArticles() {
        const data = {};

        return remote.get('appdata', 'articles?query={}&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getTwoArticles() {
        const data = {};

        return remote.get('appdata', 'articles?query={}&limit=2&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getArticlesWithMostViews() {
        const data = {};

        return remote.get('appdata', 'articles?query={}&limit=3&sort={"views": -1}', 'guest', data);
    }

    function getArticlesForKids() {
        const data = {};

        return remote.get('appdata', 'articles?query={"type": "Kids"}&limit=3&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getScienceArticles() {
        const data = {};

        return remote.get('appdata', 'articles?query={"type": "Science"}&limit=3&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getRegularArticles() {
        const data = {};

        return remote.get('appdata', 'articles?query={"type": "Regular"}&limit=3&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getAllUserArticles() {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        return remote.get('appdata', `articles?query={"authorId":"${authorId}"}&sort={"_kmd.lmt": -1}`, 'kinvey', data);
    }

    async function editArticle(title, articleImage, content, contentImage, additionalContent, additionalImage, type, articleId) {
        let response = await getArticle(articleId);

        let article = response.data[0];

        article.title = title;
        article.articleImage = articleImage;
        article.content = content;
        article.contentImage = contentImage;
        article.additionalContent = additionalContent;
        article.additionalImage = additionalImage;
        article.type = type;

        const endpoint = `articles/${articleId}`;

        return remote.update('appdata', endpoint, 'kinvey', article);
    }

    async function incrementViews(articleId) {
        let response = await getArticle(articleId);

        let article = response.data[0];

        article.views += 1;

        const endpoint = `articles/${articleId}`;

        return remote.update('appdata', endpoint, 'kinvey', article);
    }

    return {
        createArticle,
        deleteArticle,
        getArticle,
        getAllArticles,
        editArticle,
        incrementViews,
        getAllUserArticles,
        getTwoArticles,
        getArticlesWithMostViews,
        getArticlesForKids,
        getRegularArticles,
        getScienceArticles,
    }
})();

export default articleService
