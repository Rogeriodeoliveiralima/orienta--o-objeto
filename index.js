class Cliente{
    nome;
    cpf; 
}

class contaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = " Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = " Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar(300);
contaCorrenteRicardo.sacar(130);

console.log(contaCorrenteRicardo);




