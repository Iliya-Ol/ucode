// Uslovie: Создайте веб-страницу с тремя разделами: • форма создания файла, которая содержит - обязательное поле ввода для имени файла - обязательное поле ввода для содержимого файла - кнопку для создания файла в каталоге tmp с именем и содержимым, представленным в форме • список файлов, который отображает все файлы в каталоге tmpas links • текущий раздел файла (отображается только в том случае, если файл выбран), который содержит - имя файла - содержимое файла - кнопку для удаления файла из каталога tmp Щелчком по имени файла из списка файлов файл становится выбранным, и в разделе currentfile отображается информация о нем. Примечания: • если пользователь пытается создать файл, который уже существует, добавить содержимое в конец файла • если при создании файла каталог tmp не существует, создайте это

// Создавайте классы для манипуляций с файлами: • FileList - все манипуляции со списком файлов • File - все манипуляции с файлами (создание, запись, чтение и т. Д.)

const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')
const File = require('./File')
const FileList = require('./FileList')
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
    const ss = req.session
    if (ss.errorMsg !== undefined) {
        return res.render('index',  {
            errorMsg: ss.errorMsg
        })
    }
    let files = new FileList()
    if (files.hasFiles()) {
        res.render('index', {
            files: JSON.stringify(files.getList())
        })
    }
})

app.post('/create', async (req, res) => {
    const rb = req.body
    const ss = req.session

    if (rb.fileName === '') {
        ss.errorMsg = 'File name cannot be empty!'
        return res.redirect('/')
    }

    (new File(rb.fileName)).write(rb.content)
    res.redirect('/')
})

app.post('/delete', async (req, res) => {
    (new File(req.body.deleteFile)).delete()
    return res.redirect('/')
})