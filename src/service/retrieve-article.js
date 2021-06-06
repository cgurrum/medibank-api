const fetch = require('node-fetch');
const { callHackerNews } = require('../clients/hacker-news-client');
const { callUnsplash } = require('../clients/unsplash-client');

const NodeCache = require('node-cache');

const cache = new NodeCache();

async function retrieveArticle(){
    const cacheSeconds = process.env.ARTICLE_CACHE_SECONDS || 3600;  // default cache for 1 hr if not provided
    let article = cache.get('article');
    if(!article){
        article = retrieveArticleFromApi();
        if(article){
            cache.set('article', article, cacheSeconds);
        }
    }
   return article;
}

async function retrieveArticleFromApi(){
    const hackerNewsResult = await callHackerNews();
    if(hackerNewsResult){
        const imageUrl = await callUnsplash();
        hackerNewsResult.imageUrl = imageUrl;
        return hackerNewsResult;
    }
}

exports.retrieveArticle = retrieveArticle;