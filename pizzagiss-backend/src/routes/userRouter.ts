import {Router} from 'express'; //definir un enrutador
import userController from '../controller/userController';

class UserRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', userController.listUser);
        this.router.get('/:id',userController.usuario); 
        this.router.post('/register',userController.crearUser);
        this.router.post('/',userController.logiar);
        this.router.put('/:id',userController.actualizarUser) 
        this.router.delete('/:id',userController.eliminarUser); 
    }

}
const userRouter = new UserRouter();
export default userRouter.router;