class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}



const cliente1 = new Cliente();
const cliente2 = new Cliente();



cliente1.nome = "Rogerio";
cliente1.agencia = 2001;
cliente1.saldo = 0;
cliente1.cpf = 11122222190;

cliente2.nome = "Cristiane";
cliente2.cpf = 22222190111;
cliente2.agencia = 2001;
cliente2.saldo = 0;

console.log(cliente1); 
console.log(cliente2);