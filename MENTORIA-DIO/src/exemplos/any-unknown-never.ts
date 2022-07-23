let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unknownVelor: unknown;
unknownVelor = 3;
unknownVelor = 'opa';
unknownVelor = true;
unknownVelor = 'vai sim';

let stringTest2: string = 'agora vai';


if (typeof unknownVelor === 'string') {
    stringTest2 = unknownVelor;
}

function jogaErro(erro: string, codigo: number): never { 
    throw{error: erro, code: codigo};
}

jogaErro('deu erro',500)