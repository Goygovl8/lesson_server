const http = require("http") // подключаем модуль http
const express = require("express") // подключаем библиотеку express

const app = express() // запускаем express
const PORT = 3000; // порт на который будем запускать сервер 


app.get('/' , (req, res) =>{
    res.send("Главная странциа")
})

app.get('/about' , (req, res) =>{
    res.send("О нас")
})

app.get('/contacts' , (req, res) =>{
    res.send("Контакты")
})

app.get('/product/:id' , (req, res) =>{
    console.log(req.params.id);
    
    res.send(`Продукт id: ${req.params.id}`)
})

app.get('/number/:id' , (req, res) =>{
    console.log(req.params.id);
    
    res.send(`Ваш номер телефона: ${req.params.id}`)
})

app.post('/addproduct' , (req, res) =>{
    const { name , age} = req.body;
    
})

app.listen(PORT , ()=>{ // тут расписываем на каком порту запускается сервер 
    console.log("Сервер запущен успешно по адресу: 127.0.0.1:3000"); // тут делаем уведомление для себя что сервер запущен
    
})


