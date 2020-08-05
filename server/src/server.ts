import express, { response } from 'express';
const app = express();


app.get("/users", (request , response)=>{
    response.json({'Roberto' :"132123123"})
})

app.listen(3333);

