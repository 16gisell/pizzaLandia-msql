import {Request, Response} from 'express';
import pool from '../database';

class UserController{

//listar una consulta de la base de datos
    public async listUser(req: Request, res: Response){//para listar todos
       const listUser = await pool.query('SELECT * FROM usuarios')
       res.json(listUser)
    }
//listar por individual 
    public async usuario(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const user = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if(user.length>0){
            return res.json(user[0]);
        }
        res.status(404).json({text:"no existe"});
    }

//inserta en la base de datos.
    public async crearUser(req:Request, res:Response): Promise<void>{//para crear
        //console.log(req.body);// para ejecutarlo desde el posman 
        await pool.query('INSERT INTO usuarios set ?', [req.body]); //esto es el inserto y consulta con la base de datos
        res.json({message: 'guardado el usuario'});
    }

//actualizamos el jueg
    public async actualizarUser(req:Request, res:Response): Promise<void> {//para actualizar
        const {id}= req.params;
        await pool.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'actualizando usuario'});

    }

//eliminamos elementos o datos de la base de datos    
    public async eliminarUser(req:Request, res:Response): Promise<void>{//para eliminar
        const {id}= req.params;
       await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({text: 'eliminando el usuario'})
    }

//logiare usuario

    public async logiar(req:Request, res:Response){
        const {nombre, password} = req.body;
        const user = await pool.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
        if(user.length>0){
            return res.json(user[0]);
        }
        res.status(404).json({text:"no existe"});
    }
}

const userController = new UserController();
export default userController;