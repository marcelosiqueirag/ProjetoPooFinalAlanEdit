import { Usuario } from "./Usuario";
import { Cliente } from './Cliente';
import { OperadorDeSistema } from './OperadorDeSistema';
import { Funcionario } from './Funcionario';

export class RepositorioDeUsuario{
    private mapadeusuario : Map<string,Usuario>;
    public constructor(){
     this.mapadeusuario  = new Map<string, Usuario>();

    }
    public removerOperador(email: string):boolean{
        if(!this.mapadeusuario.has(email)){
            return false;

        }
        this.mapadeusuario.delete(email);
        return true;
        
    }

    public listarClientes(): Array<Cliente>{

        let clientes  : Array<Cliente> = [];
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Cliente){
                clientes.push(usuario);

            }
        } 
        return clientes;

    }

    public listarOperadores() : Array<Funcionario>{

        let operadores : Array<OperadorDeSistema> = [];
        for(let funcionario of this.mapadeusuario.values()){
            if(funcionario instanceof Funcionario){
                operadores.push(funcionario);
            }
        }return operadores;
        
    }

    public procurarCliente(email : string) : Cliente{
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Cliente && usuario.getEmail()== email){
                return usuario;
            }
        }
        return null;


    }

    

}