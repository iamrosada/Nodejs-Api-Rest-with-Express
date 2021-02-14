
//importando o express
const express = require('express');

const bodyParser = require('body-parser');
//impotando o arquivo das routas para o index
const userRoutes = require('./routes/userRoutes')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))
//a porta que vai ser chamada


userRoutes(app);

app.get('/',(req, res)=>{

    res.send("ola mundo pelo Express");
})
//ouvindo a porta e return uma funcao
app.listen(port, ()=>{
  console.log("rodando na porta 3000")
})