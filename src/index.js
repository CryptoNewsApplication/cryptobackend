const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');


// Connect to the CryptoControl API 
const appId = process.env.APPID || '2371d8a13c6ed5495d93590f41663623';
const cryptoURI = process.env.MAP_ENDPOINT || "https://cryptocontrol.io/api/v1/public";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchArticles = async () => {
    const endpoint = `${cryptoURI}/news?key=${appId}&`;
    const response = await fetch(endpoint);
  
    return response ? response.json() : {}
};

router.get('/news', async ctx => {
    const articles = await fetchArticles();
    
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = articles;
  
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);