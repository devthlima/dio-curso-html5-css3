
//solução 1
function verificaPalimedromo(string){
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

// solução 2

function verificaPalimedromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalimedromo2("gato"))