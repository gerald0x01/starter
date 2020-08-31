function checaIdade(idade){
    return new Promise(function(resolve, reject){
        if(idade >= 20){
            resolve('Maior que 18.');
        } else {
            reject('Menor que 18');
        }
    })
}

checaIdade(20)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });