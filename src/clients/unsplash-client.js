const fetch = require('node-fetch');

async function callUnsplash(){
    try{
        const unsplashUrl = process.env.UNSPLASH_URL || "https://api.unsplash.com/photos/random?query=medicine&count=1";
        const accessKey = process.env.UNSPLASH_ACCESS_KEY || 'P8eUACBJhR9M1IsR_PN02CaVNQMtwDmRmQc1Q8pbq5M';
        const res = await fetch(unsplashUrl, {
            headers: {
                'Accept-Version': 'v1',
                'Authorization': 'Client-ID '+accessKey
            }
        });
        if(res.ok){
            const result = await res.json();
            return mapUnsplashResult(result);
        }
    }catch(error){
        console.error('Error retrieving image url from unspalash url..');
    }
    return;
}

function mapUnsplashResult(result){
    if(result && result.length>0 && result[0].urls && result[0].urls.small){
        return result[0].urls.small;
    }
    return;
}

exports.callUnsplash = callUnsplash;