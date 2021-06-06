const fetch = require('node-fetch');

async function callHackerNews(){
    try{
        const hackerNewsUrl = process.env.HACKER_NEWS_URL || "https://hn.algolia.com/api/v1/search?query=medicine&tags=story";
        const res = await fetch(hackerNewsUrl);
        if(res.ok){
            const result = await res.json();
            return mapHackerNewsResult(result);
        }
    }catch(error){
        console.error('Error retrieve data from hacker news url..');
    }
    return;
}

function mapHackerNewsResult(result){
    if(result && result.hits && result.hits.length>0){
       const randomHit = result.hits[getRandomInt(result.hits.length)];
       return {
           title: randomHit.title,
           url: randomHit.url,
           author: randomHit.author
       }
    }
    return;
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

exports.callHackerNews = callHackerNews;