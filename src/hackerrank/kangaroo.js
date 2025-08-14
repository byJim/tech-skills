const x1 = 21, v1 = 6, x2 = 47, v2= 3;

function kangaroo ( x1, v1, x2, v2){
  //Validar velocidad
   if (v2 >= v1 ) return "NO"
  //Ecuacion lineal
  const j = (x2 - x1) % (v1 - v2)
  return (j === 0 ) ? "YES" : "NO";
}

console.log(kangaroo(x1, v1, x2, v2))

