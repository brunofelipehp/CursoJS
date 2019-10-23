var usuarios  = [

    {
        nome: "Diego",
        habilidade: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidade: ["VueJS", "Ruby on Rais", "Elixir"]
    }
];

function habilidades(params) {
    
    var usuario = params;

    for (var value of usuario) {
        
        console.log(`O ${value.nome} possui as habilidades: ${value.habilidade.join(", ")}`);
        }
}

habilidades(usuarios);