var endereco = {
    rua:  "Rua dos pinheiros",
    numero: 1293,
    bairro: "Cachoeirinha",
    cidade: "São Paulo",
    uf: "SP"
};

function morador(usuario) {
    
    return `O usuario mora ${endereco.cidade} / ${endereco.uf} no bairro ${endereco.bairro} na rua "${endereco.rua}"
     com nº ${endereco. numero}`
}

//ar retorno =  morador();

console.log(morador())