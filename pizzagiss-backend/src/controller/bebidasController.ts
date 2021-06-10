import {Request, Response} from 'express';
import pool from '../database';

class BebidasController{

//listar una consulta de la base de datos mercancia
    public async bebida(req: Request, res: Response){//para listar todos
       const contenido = await pool.query('SELECT * FROM bebidas')
       res.json(contenido)
    }
//listar por individual 
    public async lisbebida(req:Request, res:Response): Promise<any>{//para listar por uno
        const{idBebidas} = req.params;
        const pago = await pool.query('SELECT * FROM bebidas WHERE idBebidas = ?', [idBebidas]);
        if(pago.length>0){
            return res.json(pago[0]);
        }
        res.status(404).json({text:"no existe"});
    }
 }

const bebidasController = new BebidasController();
export default bebidasController;