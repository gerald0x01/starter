// REST
function soma(a, b, ...params) {
    return params; // return 4
}

console.log(soma(1, 3, 4))


// SPREAD
const usuario1 = {
    nome: 'Geraldo',
    idade: 23,
    empresa: 'Nenhuma'
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };
console.log(usuario2);