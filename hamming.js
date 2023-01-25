//distancia de Hamming
const hammingDistance = (a,b) => {
    let distancia = 0;
    if(a.length!==b.length){
        console.log('No es posible verificarlo')
        return;
    }else{
        for(let i = 0; i<a.length;i++){
            if(a[i]!==b[i]){
                distancia++
            }
        }
    }
    return distancia
}

let res = hammingDistance('loba', 'roma');
console.log(res)
