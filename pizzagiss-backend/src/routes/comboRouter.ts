import {Router} from 'express'; //para definir un enrutador
import comboController from '../controller/comboController';

class ComboRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', comboController.combo);
      this.router.get('/:id', comboController.listCombo);

    }
}

const comboRouter = new ComboRouter();
export default comboRouter.router;