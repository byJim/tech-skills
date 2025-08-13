const s=7, t= 11 //Casa
const a = 5 //Manzano
const b = 15 ///Naranjo
const apples = [-2,2,1]
const oranges = [5,-6]

function countApplesAndOrages(s,t, a, b, apples, oranges){
  let conteo_manzanas =0, conteo_narajas = 0;
  for (let i= 0; i < apples.length; i++){
    //Calcular la posicion
    let posicion = a + (apples[i])
    //Validar rango inclusivo
    if ( posicion >= s && posicion <= t) conteo_manzanas++
  }

  for (let i= 0; i < oranges.length; i++){
    //Calcular la posicion
    let posicion = b + (oranges[i])
    //Validar rango inclusivo
    if ( posicion >= s && posicion <= t) conteo_narajas++
  }
  console.log(conteo_manzanas, conteo_narajas)
}
countApplesAndOrages(s, t, a, b, apples, oranges)

function countApplesAndOragesTwo(s,t, a, b, apples, oranges){
  let conteo_manzanas =0, conteo_narajas = 0;
  conteo_manzanas =  apples.filter( distancia => {
    const posicion = a + distancia
    return posicion >= s && posicion <= t
  }).length

  conteo_narajas = oranges.filter( distancia => {
    const posicion = b + distancia
    return posicion >= s && posicion <= t
  }).length

  console.log(conteo_manzanas, conteo_narajas)
}

countApplesAndOragesTwo(s, t, a, b, apples, oranges)