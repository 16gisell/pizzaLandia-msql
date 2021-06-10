import {Request, Response} from 'express';
import pool from '../database';

class ComboController{

//listar una consulta de la base de datos mercancia
    public async combo(req: Request, res: Response){//para listar todos
       const contenido = await pool.query('SELECT * FROM combos')
       res.json(contenido)
    }
// //listar por individual 
    public async listCombo(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const pago = await pool.query('SELECT * FROM combos WHERE id = ?', [id]);
        if(pago.length>0){
            return res.json(pago[0]);
        }
        res.status(404).json({text:"no existe"});
    }
 }

const comboController = new ComboController();
export default comboController;