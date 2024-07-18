const express = require('express');

const server = express();
const port = 3333;
server.use(express.json())

const cursos = ['javascript','nodejs','reactJS'];

//MIDDLEWARE
function checkMiddleware(req,res,next){
    if(!req.body.CourseName){
      return  res.status(400).json({erro:"Nome do curso é obrigatorio"})
    }
    return next();
}

server.get('/cursos',(req,resp)=>{
    return resp.json(cursos)
}) 
server.get('/cursos/:index',checkMiddleware,(req,res)=>{
    const {index} = req.params
    return res.json(cursos[index])
   //query paramas são sempre enviado como objeto ? antes e chave=valor & para adicionar mais um query
})

//CREATE
server.post('/cursos',(req,res)=>{
      const {CourseName} = req.body;
      cursos.push(CourseName) 
      return res.json(cursos)  
})

//UPDATE

server.put('/cursos/:index',(req,res)=>{
     const {index} =  req.params
     const {name} = req.body;

     cursos[index] = name;

     return res.json(cursos) 
})

server.delete('/cursos/:index',(req,res)=>{
    const {index} = req.params;
    cursos.splice(index,1);
    return res.json(cursos)
})


server.listen(port,()=>{
    console.log('servidor rodando na porta' + port);
});


//vamos ver como criar um crud
