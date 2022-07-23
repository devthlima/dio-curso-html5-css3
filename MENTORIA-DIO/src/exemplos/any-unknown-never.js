"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownVelor;
unknownVelor = 3;
unknownVelor = 'opa';
unknownVelor = true;
unknownVelor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownVelor === 'string') {
    stringTest2 = unknownVelor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
