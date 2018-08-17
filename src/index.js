const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');


// Connect to the CryptoControl API 
const appId = process.env.APPID || 'INSERT APPID HERE';
const cryptoURI = process.env.MAP_ENDPOINT || "https://cryptocontrol.io/api/v1/public";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchArticles = async () => {
    const endpoint = `${cryptoURI}/news?key=${appId}&`;
    const response = await fetch(endpoint);
  
    return response ? response.json() : {}
};

router.get('/generalnews', async ctx => {
    const res = {};
    const articles = await fetchArticles();

    res['articles'] = [];
    res['articles'].push(articles[1].similarArticles);
    
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = res;
  
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);