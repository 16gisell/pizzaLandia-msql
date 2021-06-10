import {Request, Response} from 'express';
import pool from '../database';

class PizzaController{

//listar una consulta de la base de datos mercancia
    public async pizza(req: Request, res: Response){//para listar todos
       const contenido = await pool.query('SELECT * FROM pizzas')
       res.json(contenido)
    }
// //listar por individual 
    public async listPizza(req:Request, res:Response): Promise<any>{//para listar por uno
        const{idPizza} = req.params;
        const pago = await pool.query('SELECT * FROM pizzas WHERE idPizza = ?', [idPizza]);
        if(pago.length>0){
            return res.json(pago[0]);
        }
        res.status(404).json({text:"no existe"});
    }
 }

const pizzaController = new PizzaController();
export default pizzaController;