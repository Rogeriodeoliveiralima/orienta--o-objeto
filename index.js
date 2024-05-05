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

    depositar(valor){
        if(valor > 0){    
            this.saldo += valor;
        }
    }
}








const cliente1 = new Cliente();
cliente1.nome = "Rogerio";
cliente1.agencia = 2001;

const cliente2 = new Cliente();
cliente2.nome = "Cristiane";
cliente2.cpf = 22222190111;

const cliente3 = new Cliente();
cliente4.nome = "Rafaela";
cliente3.cpf = 3005333324490;

const cliente3 = new Cliente();
cliente3.nome = "Marcio";
cliente3.cpf = 252328218;

const cliente3 = new Cliente();
cliente3.nome = "Alexandre";
cliente3.cpf = 3500000788;


const  contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.saldo = 0;
contaCorrenteRafael.agencia = 1001;

contaCorrenteRafael.depositar(100);

contaCorrenteRafael.sacar(50);


console.log(contaCorrenteRafael);


//remover

const  contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.saldo = 0;
contaCorrenteRafael.agencia = 1001;

contaCorrenteRafael.depositar(100);

contaCorrenteRafael.sacar(50);


console.log(contaCorrenteRafael);





