import { Cliente } from "./Cliente";
import { ClienteFisico } from "./ClienteFisico";
import { ClienteJuridico } from "./ClienteJuridico";

class CadastroClientes {
    private clientes: Cliente[];

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    listarClientes(): string {
        let lista: string = "Clientes:\n";
        this.clientes.forEach(cl => lista += `\t${cl.toString()}\n`);
        return lista;
    }

}

let cc = new CadastroClientes();
let c1 = new ClienteFisico("bruno", 23, 2400);
let c2 = new ClienteJuridico("bruno juri", 421);

cc.adicionarCliente(c1);
cc.adicionarCliente(c2);

console.log(cc.listarClientes());