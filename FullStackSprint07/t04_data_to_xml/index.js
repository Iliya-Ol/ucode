// Uslovie : Вы знаете, что такое XML? Вы знаете, для каких целей его можно использовать? Проще говоря - HTML - это «костюм» для XML. Узнайте больше самостоятельно. ОПИСАНИЕ Создайте classAvengerQuote с такими свойствами: • id • author - имя Мстителя, сказавшего это • quote • photo - массив ссылок на изображения из сцены фильма • publishDate • comments - дата объекта, комментарий Также могут понадобиться ListAvengerQuotesandCommentclasses.Create функции для преобразования массивов AvengerQuoteto и из XML: • toXML (fileName) - сохранить XML в файл avenger_quote.xml • fromXML (fileName) - читать XML из файла avenger_quote.xml Создать массив из четырех объектов AvengerQuote, по крайней мере, с одной фотографией и одним комментарием. Показывать на страницах массивов AvengerQuote до и после преобразования XML в двух столбцах.


  
const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')
const PORT = process.env.PORT ?? 8080

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(
    session({
        secret: 'password secret',
        saveUninitialized: true
    })
)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res) {
    res.render('index')
})