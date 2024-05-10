import{Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Rogerio,250398');
cliente1.agencia = 2001;


const cliente2 = new Cliente('Cristiane',2222190111);
cliente2._nome;
cliente2._cpf;

const cliente3 = new Cliente();
cliente3.nome = "Rafael";
cliente3.cpf = 3005333324490;


const cliente4 = new Cliente();
cliente4.nome = "Marcio";
cliente4.cpf = 252328218;

const cliente5 = new Cliente();
cliente5.nome = "Alexandre";
cliente5.cpf = 3500000788;


const  contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.agencia = 1001;
contaCorrenteRafael.cliente = cliente3;
contaCorrenteRafael.depositar(5000);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;


let valor = 200;
contaCorrenteRafael.depositar(1000);
contaCorrenteRafael.transferir(valor, conta2);
console.log(conta2._cpf);
















