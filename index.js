const express = require("express");
const app = express();

app.set('view engine',"ejs");

app.get("/", (req, res)=> {
    //Renderiza/Desenha a página na tela
    res.render("index");
});

app.listen(8000,()=>{
    console.log("Aplicação rodando");
});