# Medibank Coding Challenge (API)

## Overview
*  API '/api/article' returns response that contains title, url, author, and imageUrl. E.g.,
```
{
    "title": "Fake doctor saved thousands of infants and changed medical history (2018)",
    "url": "https://nypost.com/2018/07/23/how-fake-docs-carnival-sideshow-brought-baby-incubators-to-main-stage",
    "author": "Alex3917",
    "imageUrl": "https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NDkzNn0"
}
```

### System Requirements
* [Docker](https://www.docker.com/products/docker-desktop)

## Running the application
```sh
npm start
```
```
Access using http://localhost:4000/ in browser
```

## Backend APIs
* Hacker News - https://hn.algolia.com/api/v1/search?query=medicine&tags=story
* Unsplash Image - https://api.unsplash.com/photos/random?query=medicine&count=1

## Cache
Response is cached for 1 hour