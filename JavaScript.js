var aux = {
    value: null,
    right: null,
    left: null
}
var emOrde=[];
var i=-1;
function insert(aux, value){
 
    if(aux.value){
        if(value > aux.value){
            insert(aux.right, value)
        }else{
            insert(aux.left, value) 
        }
    }else{
        aux.value = value
        aux.right = {}
        aux.left = {}
    }
    return true;
}

function preOrdem(aux){
    if(aux.value){
        console.log(aux.value)
        if(aux.left){
            aux.left && preOrdem(aux.left)
        }
        if(aux.right){
            preOrdem(aux.right)
        }
    }
}

function emOrdem(aux){
    this.i++;
    if(aux.value){
        if(aux.left){
            emOrdem(aux.left)
        }

        console.log(aux.value)
        if(aux.right){
            emOrdem(aux.right)
        }
    }
    return this.emOrde;
}


function posOrdem(aux){
    this.i++;
    if(aux.value){
        if(aux.left){
            posOrdem(aux.left)
        }
        if(aux.right){
            posOrdem(aux.right)
        }
        console.log(aux.value)
    }
}

function localizar(aux, num){
    resultado = {}
    if(aux.value){
        if(aux.value === num){
            resultado = aux
            return resultado;
        }else if(num < aux.value){
            resultado = localizar(aux.left, num)
            return resultado;
        }else if(num > aux.value){
            resultado = localizar(aux.right, num)
            return resultado;
        }else {
            console.log("Numero não encontrado")
            return resultado;
        }
    }
}

console.log(emOrdem(aux));

module.exports={insert, localizar};
