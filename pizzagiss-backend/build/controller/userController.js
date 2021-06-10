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
class UserController {
    //listar una consulta de la base de datos
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUser = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(listUser);
        });
    }
    //listar por individual 
    usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
    //inserta en la base de datos.
    crearUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);// para ejecutarlo desde el posman 
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]); //esto es el inserto y consulta con la base de datos
            res.json({ message: 'guardado el usuario' });
        });
    }
    //actualizamos el jueg
    actualizarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'actualizando usuario' });
        });
    }
    //eliminamos elementos o datos de la base de datos    
    eliminarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE id = ?', [id]);
            res.json({ text: 'eliminando el usuario' });
        });
    }
    //logiare usuario
    logiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, password } = req.body;
            const user = yield database_1.default.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
}
const userController = new UserController();
exports.default = userController;
