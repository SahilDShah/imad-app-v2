var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne = {
     title : 'Article One | Sahil Shah',
     heading: 'Article One',
     date: 'Sep 5, 2016',
     content: ' <p> This Is The Content For My First Article. This Is The Content For My First Article.  </p> '
};

function createTemplate (data) {
     title=data.title;
     heading=data.heading;
     date=data.date;
     content=data.content;
     
     var HTMLTemplate = `
     <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" conetnt="width=device-width, initial-scale=1"/>
        <link href="ui/style.css" rel="stylesheet"/>
    </head>
    <body>
    <div class="container">
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>${heading}</h3>
    <div>
        ${date}
    </div>
    <div>
        ${content}
    </div>
</body>
</html>
 `;
 return HTMLTemplate;
} 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
