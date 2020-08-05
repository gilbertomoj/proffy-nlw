import express, { response } from 'express';
const app = express();

app.use(express.json());

app.get("/users", (request , response)=>{
    response.json({'Roberto' :"13212312s3"})
})

app.post('/users',(request , response)=>{
    console.log(request.body);
    return response.json({'Ola':'Olar'})
})

app.listen(3333);

