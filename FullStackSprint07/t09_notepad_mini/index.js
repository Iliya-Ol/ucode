// Джейн Фостер: Годы исследований. Прошли. Дарси: Они даже забрали мой iPod. Доктор Эрик Селвиг: А как насчет резервных копий? Джейн Фостер: Они сделали наши резервные копии. Они сделали резервные копии наших резервных копий. Они были чрезвычайно тщательными. Дарси: Просто загрузили туда около тридцати песен ». ОПИСАНИЕ Помогите Джейн восстановить данные. Создайте веб-форму для заметок с: • названием заметки • важностью заметки - низкой, средней, высокой • содержанием заметки. Нажав кнопку: • добавьте текущую дату / время • сериализовать данные в JSON • сохранить данные в файл Под формой отобразить список сохраненных заметок: • «дата> имя» - ссылка для просмотра деталей заметки • «удалить» - ссылка для удаления текущей заметки

  
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