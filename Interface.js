"use strict";
exports.__esModule = true;
var RepositoriosDeProdutos_1 = require("./RepositoriosDeProdutos");
var readline = require('readline-sync');
var operacoes = "***Bem vindo ao Spotflix**** \n" +
    "1 -  Logar \n" +
    "2 -  Cadastrar-se como Cliente \n" +
    "3 -  Sair \n";
var comando;
// let comando:number;
// let usuarioLogado : Usuario | undefined = undefined;
// let repositorioDeUsuario : RepositorioDeUsuario = new RepositorioDeUsuario();
var repositorioDeProdutos = new RepositoriosDeProdutos_1.RepositorioDeProdutos();
while (true) {
    comando = readline.question("Digite a opcao: ").split(" ");
    // comando = readline.question("Digite a opcao: ");
    if (comando[0] == "1") {
        repositorioDeProdutos.adicionarFilme("1", "Filme1", "Terror", 20, 1999, 16, 120);
        repositorioDeProdutos.adicionarFilme("2", "Filme2", "Terror", 20, 2005, 18, 100);
        repositorioDeProdutos.adicionarFilme("3", "Filme3", "Terror", 20, 1998, 12, 90);
    }
    if (comando[0] == "2") {
        repositorioDeProdutos.listarProdutos();
        // repositorioDeProdutos.procurarProduto("1");
    }
    if (comando[0] == "3") {
        repositorioDeProdutos.removerProduto("2");
    }
    // comando = readline.question("Digite a opção: ").split(" ");
    // if(usuarioLogado == undefined){
    //     console.log(operacoes);
    //     if(comando[0] == "1"){
    //         console.log("***Faça seu Login***");
    //         let login = readline.question("Digite seu login: ");
    //         let senha =  readline.question(" Digite sua senha: ");
    //         let usuarioLogin = repositorioDeUsuario.procurarCliente(login);
    //         if(usuarioLogin.getSenha() == senha){
    //             usuarioLogado = usuarioLogin;
    //         }else{
    //             console.log("Senha incorreta");
    //         }
    //     }
    // }else if(usuarioLogado instanceof Gerente){
    // }
    // if(comando[0] == "1"){
    // }
}
