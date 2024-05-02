class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    deposito(valor){
        if(this.saldo = valor){
            this.saldo + valor;
        }
    }
}



const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();



cliente1.nome = "Rogerio";
cliente1.agencia = 2001;
cliente1.saldo = 0;
cliente1.cpf = 11122222190;

cliente2.nome = "Cristiane";
cliente2.cpf = 22222190111;
cliente2.agencia = 2001;
cliente2.saldo = 0;


cliente3.nome = "Rafael";
cliente3.cpf = 3005199798;
cliente3.agencia = 2016;
cliente3.saldo = 0;

console.log(cliente1); 
console.log(cliente2);
console.log(cliente3);

const  contaCorrente = new ContaCorrente();

contaCorrente.Rafael.deposito(200);


console.log(contaCorrente.Rafael.saldo);
