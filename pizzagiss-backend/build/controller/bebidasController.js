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
class BebidasController {
    //listar una consulta de la base de datos mercancia
    bebida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contenido = yield database_1.default.query('SELECT * FROM bebidas');
            res.json(contenido);
        });
    }
    //listar por individual 
    lisbebida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idBebidas } = req.params;
            const pago = yield database_1.default.query('SELECT * FROM bebidas WHERE idBebidas = ?', [idBebidas]);
            if (pago.length > 0) {
                return res.json(pago[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
}
const bebidasController = new BebidasController();
exports.default = bebidasController;
