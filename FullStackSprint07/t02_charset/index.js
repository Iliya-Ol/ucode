// Uslovie: как в нашей легенде, где HYDRA и S.H.I.E.L.D. являются двумя сторонами медали, одни и те же символы могут различаться в зависимости от кодировки. Создайте веб-страницу для преобразования строк с тремя разными кодировками. Веб-страница должна иметь: • поле для входной строки, которое нужно преобразовать • поле с три варианта выбора (три типа кодировки) • кнопка «Изменить кодировку» для изменения кодировки • кнопка «Очистить» для возврата страницы в исходное состояние • неактивные поля вывода с преобразованными строками (может быть несколько, если выбрано более одной кодировки)

const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')
const iconv = require('iconv-lite')
const PORT = process.env.PORT ?? 8080

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
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

    res.render('index')
})

app.post('/charset', (req, res) => {
    const ss = req.session
    const rb = req.body

    if (!rb) {
        ss.errorMsg = ''
        return res.sendStatus(400)
    } else if (rb.str === '') {
        ss.errorMsg = 'Input string is empty!'
        return res.redirect('/')
    }

    let select = (rb.sel instanceof String) ? [ rb.sel ] : rb.sel
    let message = rb.str

    let utf = (select.includes('UTF-8'))
        ? message
        : ''
    let iso = (select.includes('ISO-8859-1'))
        ? iconv.encode(iconv.decode(message, 'utf8'), 'iso-8859-1').toString()
        : ''
    let win = (select.includes('Windows-1252'))
        ? iconv.encode(iconv.decode(message, 'utf8'), 'cp1252').toString()
        : ''

    res.render('index',  {
        input: rb.str,
        utf: utf,
        iso: iso,
        win: win,
        errorMsg: ''
    })
})
