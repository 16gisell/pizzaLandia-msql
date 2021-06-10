import {Request, Response} from 'express';
import pool from '../database';

class FacturaController{

//listar una consulta de la base de datos mercancia
    public async factura(req: Request, res: Response){//para listar todos
       const contenido = await pool.query('SELECT * FROM facturas')
       res.json(contenido)
    }
// //listar por individual 
    public async listFactura(req:Request, res:Response): Promise<any>{//para listar por uno
        console.log(req.params)
        const{id} = req.params;
        const factu = await pool.query('SELECT * FROM facturas WHERE id = ?', [id]);
        if(factu.length>0){
            return res.json(factu[0]);
        }
        res.status(404).json({text:"no existeeeeee"});
    }

//inserta en la base de datos.
    public async create(req:Request, res:Response): Promise <void>{//para crear
        console.log(req.body);// para ejecutarlo desde el posman 
        await pool.query('INSERT INTO facturas set ?', [req.body]); //esto es el inserto y consulta con la base de datos
        res.json({message: 'guardado'});
    }

//actualizamos 
    public async updated(req:Request, res:Response): Promise<void> {//para actualizar
        const {id}= req.params;
        await pool.query('UPDATE facturas set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'actualizando'});

    }

//eliminamos elementos o datos de la base de datos    
    public async delete(req:Request, res:Response): Promise<void>{//para eliminar
        const {id}= req.params;
       await pool.query('DELETE FROM facturas WHERE id = ?', [id]);
        res.json({text: 'eliminando'})
    }
 }

const facturaController = new FacturaController();
export default facturaController;