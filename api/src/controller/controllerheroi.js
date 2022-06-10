import { Router } from "express";
import { Inserirheroi, listarheroi } from "../repository/repositoryheroi.js";
const server = Router();



server.post('/heroi', async (req, resp) =>{
    try{
        const heroi = req.body;
        const resposta = await Inserirheroi( heroi )
        resp.send(resposta);

    }catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/heroi', async (req, resp) =>{
    try{
        const resposta = await listarheroi( )
        resp.send(resposta);

    }catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
})






export default server;