import {Router} from 'express'; //para definir un enrutador
import tamañoController from '../controller/tamañoController';

class TamañoRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', tamañoController.tamaño);

    }
}

const tamañoRouter = new TamañoRouter();
export default tamañoRouter.router;