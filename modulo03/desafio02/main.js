var inputElement = document.querySelector('#app input');
    var list = document.querySelector('#app ul');

    function renderRepo(repositories) {
    
        for (repositorie of repositories) {
    
            var textElement = document.createTextNode(repositorie.name);
            var linha = document.createElement('li')
            linha.appendChild(textElement);
            list.appendChild(linha);
            
        }
    }

function searchUser(){
    
    var user = inputElement.value;

        user 
    
   axios.get(`https://api.github.com/users/${user}/repos`)

    .then(function (response) {
        
        renderRepo(response.data);
    })

    .catch(function (error) {
        if (error.response) {
        alert(' error')
            
        }

    });


}

