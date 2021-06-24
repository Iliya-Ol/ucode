//Создайте веб-страницу с формой, на которой вы должны разместить: • поле ввода для URL-адреса изображения • кнопку Когда форма получает URL-адрес, на странице будет отображаться изображение. При нажатии кнопки: • загрузите изображение из ссылка • обрезать большую сторону, чтобы создать квадратное изображение • создать новое квадратное изображение из: –подготовленного изображения – канала R – канала G – канала B • показать полученное изображение на странице

  
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
/// ДОЛЖНА БЫТЬ ПАПКА node_modules ///