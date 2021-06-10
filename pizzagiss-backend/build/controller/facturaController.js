"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class FacturaController {
    //listar una consulta de la base de datos mercancia
    factura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contenido = yield database_1.default.query('SELECT * FROM facturas');
            res.json(contenido);
        });
    }
    // //listar por individual 
    listFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const factu = yield database_1.default.query('SELECT * FROM facturas WHERE id = ?', [id]);
            if (factu.length > 0) {
                return res.json(factu[0]);
            }
            res.status(404).json({ text: "no existeeeeee" });
        });
    }
    //inserta en la base de datos.
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); // para ejecutarlo desde el posman 
            yield database_1.default.query('INSERT INTO facturas set ?', [req.body]); //esto es el inserto y consulta con la base de datos
            res.json({ message: 'guardado' });
        });
    }
    //actualizamos 
    updated(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE facturas set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'actualizando' });
        });
    }
    //eliminamos elementos o datos de la base de datos    
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM facturas WHERE id = ?', [id]);
            res.json({ text: 'eliminando' });
        });
    }
}
const facturaController = new FacturaController();
exports.default = facturaController;
