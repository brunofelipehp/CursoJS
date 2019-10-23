function experiencia(params) {
    
    var ano = params;

    if ( ano <= 1) {
        
        return "Iniciante";

    }else if (ano > 1 && ano <= 3) {
        
        return "Intermediario";

    }else if (ano > 3 && ano <= 6 ) {
        
        return "Avançado"

    }else if (ano >= 7 ) {
      return "Jedi Master" 
    }
}

var anosEstudo  = 10;
console.log(experiencia(anosEstudo))