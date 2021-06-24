// «Коллекционер: до самого создания было шесть сингулярностей. Затем вселенная взорвалась, и остатки этих систем были выкованы в концентрированные слитки ... Камни бесконечности». ОПИСАНИЕ Знаете ли вы, что у Marvel есть собственный API? Они есть. Может быть, вы даже можете найти там Камни Бесконечности ... Кто знает. Ваша миссия для этой задачи - изучить особенности их API. Перейдите по ссылке, выясните, что и как вы можете получить оттуда. Создайте веб-страницу. который отображает вывод запроса API в структурированном формате (не в формате JSON). Вы можете выбрать любую конечную точку по своему усмотрению. Но заголовок на вашей странице должен быть изменен в соответствии с именем этой конечной точки. Также вы можете создать такой же дизайн, как в примере, или создать свой собственный. Тебе решать

const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const request = require('request')
const PORT = process.env.PORT ?? 8080

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(bodyParser.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', async function(req, res) {
    res.render('index', )
})