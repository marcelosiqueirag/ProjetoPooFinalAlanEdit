"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
const OperadorDeSistema_1 = require("./OperadorDeSistema");
class Gerente extends Funcionario_1.Funcionario {
    constructor(nome, email, senha, matricula, salario, operadores, clientes, produtos) {
        super(nome, email, senha, matricula, salario);
        this.operadores = operadores;
        this.clientes = clientes;
        this.produtos = produtos;
    }
    getOperadores() {
        return this.operadores;
    }
    setOperadores(operadores) {
        this.operadores = operadores;
    }
    adicionarOperador(nome, email, senha, matricula, salario) {
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);
        let operacao = new OperadorDeSistema_1.OperadorDeSistema(nome, email, senha, matricula, salario);
        this.operadores.push(operacao);
        return operacao;
    }
    removerOperador(email) {
        for (let i = 0; i < this.operadores.length; i++) {
            if (this.operadores[i].getEmail() == email) {
                this.operadores.splice(i, 1);
                return "operador deletado";
            }
        }
        return "email não encontrado";
    }
    // public LisClieProduOperad () : void{
    //     if()
    //     for (let i = 0; i < )
    listarClientes() {
        return this.clientes;
    }
    listarProdutos() {
    }
}
exports.Gerente = Gerente;
// Adicionar Operadores 
// Remover Operadores
// Listar os Clientes, Produtos e Operadores
// Procurar Cliente, Produto e Operadore por email ou codigo
console.log("ta rodando");
let gerente = new Gerente("Marcelo", "marcelo@email.com", "123", "123", 400.000, []);
console.log(gerente.adicionarOperador("Karla", "karla@email.com", "123", "1234", 200.000));
console.log(gerente.adicionarOperador("Lindberg", "lindberg@email.com", "123", "1234", 200.000));
console.log(gerente.getOperadores());
console.log(gerente.removerOperador("lindberg@email.com"));
console.log(gerente.getOperadores());
