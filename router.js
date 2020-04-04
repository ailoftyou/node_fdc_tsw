const express = require('express');
const url = require('url');

const Article = require('./modles/article');
const News = require('./modles/news');
const Addp = require('./modles/addPor');

const router = express.Router();

router.get('/',(req,res) => {

    Article.find((err,art) => {
        res.render('index.html',{
            art:art
        })
    })
});

router.get('/guanyugongsi',(req,res) => {

    Article.find((err,art) => {
        if(err) return console.log(err);
        
        res.render('list-a.html',{
            title:'关于公司',
            url:'/guanyugongsi',
            art:art
        })
    })

});

router.get('/chanpinhefuwu',(req,res) => {

    Addp.find((err,por) => {
        if(err) return console.log(err);

        res.render('product.html',{
            title:'产品和服务',
            url:'/chanpinhefuwu',
            por:por
        })

    })
    
});

router.get('/xinwenzhongxing',(req,res) => {

    News.find((err,news) => {
        if(err) return console.log(err);

        res.render('list-n.html',{
            title:'新闻中心',
            url:'/xinwenzhongxing',
            news:news
        })
    })
})

router.get('/renliziyuan',(req,res) => {
    res.render('list.html',{
        title:'人力资源',
        url:'/renliziyuan'
    })
})

router.get('/publicArticle',(req,res) => {
    res.render('publicArticle.html')
})
router.post('/publicArticle',(req,res) => {
    const art = req.body;
    new Article(art).save((err) => {
        if(err) return console.log(err);
        res.redirect('/');
    })
})

router.get('/news',(req,res) => {
    res.render('news.html')
})
router.post('/news',(req,res) => {
    const news = req.body;
    new News(news).save((err) => {
        if(err) return console.log(err);
        res.redirect('/')
    })
})

router.get('/article-a/:id',(req,res) => {

    const id = req.url.slice(14,-3);
    /* const id2 = req.url;
    console.log(id,id2) */

    Article.findOne({
        _id : id
    },(err,art) => {
        if(err) return console.log(err);

        const article = art.article;

        const time = JSON.stringify(art.created_time);
        
        res.render('article-a.html',{
            art:art,
            article:article,
            time:time.slice(1,11)
        })
    })
})
router.get('/article-n/:id',(req,res) => {

    const id = req.url.slice(14,-3);
    /* const id2 = req.url;
    console.log(id,id2) */

    News.findOne({
        _id : id
    },(err,art) => {
        if(err) return console.log(err);

        const article = art.article;
        const time = JSON.stringify(art.created_time);

        res.render('article-a.html',{
            art:art,
            article:article,
            time:time.slice(1,11)
        })
    })
})
router.get('/article-c/:id',(req,res) => {

    const id = req.url.slice(14,-3);
    /* const id2 = req.url;
    console.log(id,id2) */

    Addp.findOne({
        _id : id
    },(err,art) => {
        if(err) return console.log(err);

        const article = art.article;
        const time = JSON.stringify(art.created_time);

        res.render('article-a.html',{
            art:art,
            article:article,
            time:time.slice(1,11)
        })
    })
})

router.get('/addPor',(req,res) => {
    res.render('addProduct.html')
})
router.post('/addPor',(req,res) => {
    const por = req.body;

    new Addp(por).save((err) => {
        if(err) return console.log(err);
        res.redirect('/');
    })

})

module.exports = router;
