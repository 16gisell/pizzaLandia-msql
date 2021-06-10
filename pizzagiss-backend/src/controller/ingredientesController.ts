import {Request, Response} from 'express';
import pool from '../database';

class IngredientesController{

//listar una consulta de la base de datos mercancia
    public async ingredientes(req: Request, res: Response){//para listar todos
       const contenido = await pool.query('SELECT * FROM ingredientesextra')
       res.json(contenido)
    }
 }

const ingredientesController = new IngredientesController();
export default ingredientesController;