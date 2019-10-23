var skills = ["JavaScript", "ReactJS", "React Native"];

function temHabilidade(params) {

    var habilidade = params;

    if (-1 != habilidade.indexOf("JavaScript")) {
        
        return true
    }else{

        return false
    }

  
    
}

 var res = temHabilidade(skills);

 console.log(res)