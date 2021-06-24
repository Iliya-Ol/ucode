// Uslovie: «Я, вероятно, должен изучить это, когда моя программа дешифрования закончит взламывать все защищенные файлы SHIELD.» ПРЕЖДЕ ЧЕМ НАЧАТЬ Прочтите о роли соли в контексте шифрования паролей в Интернете. ОПИСАНИЕ Создайте веб-страницу с полями ввода для пароля и для соль.Также добавьте кнопку Сохранить, чтобы сохранять данные во время сеанса. Если данные были сохранены, покажите на странице хешированный с солью пароль и добавьте поле для угадывания пароля. Добавьте кнопку «Очистить», позволяющую очистить сеанс. Если пользователь вводит правильный пароль, отобразите сообщение Взломано !, очистите предыдущую сессию и перейдите на страницу с полем ввода пароля для сохранения нового пароля. Если пароль введен неверно, вывести на той же странице сообщение Доступ запрещен! красным цветом

const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
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

let sess

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res) {
    sess = req.session
    if (sess.hash && sess.hash !== '') {
        return res.render('hash', {
            hash: sess.hash
        })
    }
    res.render('index')
})

app.post('/', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let salt = bcrypt.genSaltSync(Number(req.body.salt))
    let password = bcrypt.hashSync(req.body.savePassword, salt)

    req.session.hash = password
    res.render('hash', {
        hash: password
    })
})

app.post('/check', (req, res) => {
    if(!req.body) {
        return res.sendStatus(400)
    }
    sess = req.session
    if (bcrypt.compareSync(req.body.newPassword, sess.hash)) {
        sess.hash = ''
        return res.render('index', {
            answer: 'Hacked!'
        })
    }
    res.render('hash', {
        answer: 'Access denied!',
        hash: sess.hash
    })
})

app.post('/clear', (req, res) => {
    req.session.hash = ''
    res.redirect('/')
})