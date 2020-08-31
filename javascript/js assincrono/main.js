axios.get('https://api.github.com/users/gerald0x01');

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(err){
        console.warn(err);
    });