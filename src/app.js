const express = require('express');
const { retrieveArticle } = require('./service/retrieve-article');

const app = express();

app.get('/api/article', async (req, res) => {
    const article = await retrieveArticle();
    if(article){
        res.status(200).json(article);
    } else {
        res.status(500).send('Unable to retrieve article..');
    }
});

app.get('/', (req,res)=>{
    res.status(404).send('resource not found');
});

exports.app = app;