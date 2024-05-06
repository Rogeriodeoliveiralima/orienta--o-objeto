import{Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Rogerio";
cliente1.agencia = 2001;

const cliente2 = new Cliente();
cliente2.nome = "Cristiane";
cliente2.cpf = 22222190111;

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
contaCorrenteRafael._saldo = 0;
contaCorrenteRafael.agencia = 1001;

contaCorrenteRafael.depositar(100);

contaCorrenteRafael.sacar(50);

contaCorrenteRafael.depositar(100);
contaCorrenteRafael.depositar(100);
contaCorrenteRafael.depositar(100);
const valorSacado = contaCorrenteRafael.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRafael);









