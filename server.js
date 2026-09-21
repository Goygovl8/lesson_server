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




// const server = http.createServer((req, res)=>{ // создаем сервер
//     res.end("Hello World") // ответ клиенту когда он зайдет на наш сервер 

// })

app.listen(PORT , ()=>{ // тут расписываем на каком порту запускается сервер 
    console.log("Сервер запущен успешно по адресу: 127.0.0.1:3000"); // тут делаем уведомление для себя что сервер запущен
    
})


