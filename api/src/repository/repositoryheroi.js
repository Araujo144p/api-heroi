import { con } from "./connection.js"


export async function Inserirheroi( heroi ){
    const comando =`
    insert into 
tb_heroi (nm_heroi, ds_feitos, ds_superpoder, bt_antheroi)
values ( ?, ?, ?, ?)
    `

    const resposta = await con.query(comando, [heroi.nome, heroi.feitos, heroi.superpoderer, heroi.antheroi]);
    heroi.id= resposta.inserirId;
    return heroi;

}


export async function listarheroi (){
    const comando =`
    select id_heroi id, nm_heroi nome, ds_feitos feitos, ds_superpoder superpoder, bt_antheroi antheroi
from tb_heroi;
    
    `
    const resposta = await con.query(comando)
    return resposta[0]
}



