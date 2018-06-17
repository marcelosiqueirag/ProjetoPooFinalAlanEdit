"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Funcionario_1 = require("./Funcionario");
var RepositorioDeUsuario = /** @class */ (function () {
    function RepositorioDeUsuario() {
        this.mapadeusuario = new Map();
    }
    RepositorioDeUsuario.prototype.removerOperador = function (email) {
        if (!this.mapadeusuario.has(email)) {
            return false;
        }
        this.mapadeusuario["delete"](email);
        return true;
    };
    RepositorioDeUsuario.prototype.listarClientes = function () {
        var clientes = [];
        for (var _i = 0, _a = this.mapadeusuario.values(); _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario instanceof Cliente_1.Cliente) {
                clientes.push(usuario);
            }
        }
        return clientes;
    };
    RepositorioDeUsuario.prototype.listarOperadores = function () {
        var operadores = [];
        for (var _i = 0, _a = this.mapadeusuario.values(); _i < _a.length; _i++) {
            var funcionario = _a[_i];
            if (funcionario instanceof Funcionario_1.Funcionario) {
                operadores.push(funcionario);
            }
        }
        return operadores;
    };
    RepositorioDeUsuario.prototype.procurarCliente = function (email) {
        for (var _i = 0, _a = this.mapadeusuario.values(); _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario instanceof Cliente_1.Cliente && usuario.getEmail() == email) {
                return usuario;
            }
        }
        return null;
    };
    return RepositorioDeUsuario;
}());
exports.RepositorioDeUsuario = RepositorioDeUsuario;
