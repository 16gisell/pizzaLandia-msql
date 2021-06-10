import {Request, Response} from 'express';
import pool from '../database';

class TamañoController{

//listar una consulta de la base de datos mercancia
    public async tamaño(req: Request, res: Response){//para listar todos
       const contenido = await pool.query('SELECT * FROM tamañoPizza')
       res.json(contenido)
    }
 }

const tamañoController = new TamañoController();
export default tamañoController;