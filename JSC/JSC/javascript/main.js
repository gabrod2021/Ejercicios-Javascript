

/*EJERCICIOS DE JAVASCRIPT*/
window.alert("Bienvenido a nuestro sitio web");
document.write("HELLO WORD!!")
document.write(3+5)
var nombre
nombre=window.prompt("Deme su nombre")
document.write(nombre)
var num1
var num2
var total
num1=window.prompt("Deme un numero")
num2=window.prompt("Deme otro numero")

total=document.write(parseInt(num1)+parseInt(num2));


var num1
var num2

num1=parseInt(promt("Ingrese un numero"));
num2=parseInt(promt("Ingrese un numero"));
num3=parseInt(promt("Ingrese un numero"));

if(num1>num2){
    document.write("El numero" + num1 +"es mayor a" + num2)
}else if(num1==num2){
    document.writen("El numero" + num1 + "y el numero" + num2 + "son inguales")
}else{
    document.write("El numero" + num2 +"es mayor a" + num1)
}

num1=parseInt(promt("Ingrese un numero"));
num2=parseInt(promt("Ingrese un numero"));
num3=parseInt(promt("Ingrese un numero"));

if(num1>=num2 && num2 >= num3){
    document.write("El numero" + num1 + "es mayor o igual a" +num2)
}else if(num2>=num3){
    document.writen("El numero" + num1 +"y el numero" + num2 + "son inguales")
}else{
    document.write("El numero" + num2 +"es mayor a" + num1)
}

var max =parseFloat(prompt("Ingrese un numero"))
var num;
for(i=1; i<3;i++){
num=parseFloat(prompt("Ingrese un numero"))
if(num>max){
    max=num;
}

}
document.write("El maximo es" + max)
DECIR QUE NUMERO ES EL MAYOR DE LOS INGRESADOS DE UNA CANTIDAD A EVALUAR
var n =parseInt(prompt("Ingrese la cantidad de numeros a evaluar"))
var num;
if(n>0){var num=parseFloat(prompt("Ingrese un numero:"))}
for(i=1; i<n;i++){
    max=parseFloat(prompt("Ingrese un numero"))
    if(num>max){
        max=num;
    }
    
    }
    document.write("El maximo es" + max)

var n=parseInt(prompt("Ingrese la cantidad de numeros a evaluar"))
var num;
var num=parseFloat(prompt("Ingrese un numero:"))
for(i=1; i<n;i++){
    max=parseFloat(prompt("Ingrese un numero"))
    if(num>max){
        max=num;
    }
    
    }
    document.write("El maximo es" + max)



 var num; 
 num = parseInt(prompt("Ingrese un numero"))
 if(num!=-1)
 {var max=num}
     
 
 while(num!=-1){
     
    
     if(num>max){
        max=num;
    }
    num=parseFloat(prompt("Ingrese un numero"))
 }document.write("El maximo es" + max)
  
 var renglon
 for(var i=1; i<=30;i++){
     renglon=" "
     
     for(var j=1  ; j<=i  ; j++  ){ 
         renglon=renglon+ (i<=9?"0":"" )+i
        
     }
    
     document.write('<p style="font-family:monoespace">'+ renglon +"</p>")
 }

//////////////////////////////////////////////////////////////////////////////////////////////////////////*

 //EJERCICIOS QUE HICE EN CASA//
/*CANTIDAD DE LETRAS A */
var letras=prompt("Escriba una frase")
var cantidad=[]
var i=0
while(i < letras.length){
    if ((letras[i]) === "a") {cantidad+=letras[i]}
    
        i++
}

document.write("La cantidad de letras a es:"+ cantidad.length)


/*CANTIDAD DE VOCALES */
var letras=prompt("Escriba una frase")
var cantidad=[]
var i=0
while(i < letras.length){
    if ((letras[i]) === "a" || (letras[i]) ==="e" || (letras[i]) ==="i" || (letras[i]) ==="o" || (letras[i]) ==="u" ) {cantidad+=letras[i]}
    
        i++
}

document.write("La cantidad de vocales es:"+ cantidad.length)*/
/*MUESTRA POR PANTALLA LAS VOCALES QUE APARECEN*/
var letras=prompt("Escriba una frase")

var i=0
var vocales=[]
while(i < letras.length){
    if ((letras[i]) === "a" || (letras[i]) ==="e" || (letras[i]) ==="i" || (letras[i]) ==="o" || (letras[i]) ==="u" ) {vocales+=letras[i]}
    
        i++
}

document.write("Las vocales que se encuentras en la frase son:"+ vocales)

/*MUESTRA POR PANTALLA LA CANTIDAD DE VECES QUE APARECE CADA VOCAL*/

var letras=prompt("Escriba una frase")
var cantidad=[]
var i=0
var a=[]
var e=[]
var il=[]
var o=[]
var u=[]
while(i < letras.length) {
    if ((letras[i]) === "a" ) {
        a+=letras[i];
    } else if ((letras[i]) === "e") {
        e+=letras[i];
    } else if ((letras[i]) === "i" ) {
        il+=letras[i];
    } else if ((letras[i]) === "o" ) {
         o+=letras[i];
    } else if((letras[i]) === "u" ) {
         u+=letras[i];
    }
                
        i++
}

document.write("La a aparece en la frase :"+ a.length + "veces")
document.write(" ,la e aparece :"+ e.length + "veces")
document.write("  ,la i,:"+ il.length + "veces")
document.write("  ,la o unas :"+ o.length + "veces")
document.write("  y la u :"+ u.length + "veces")

//PARA VER SI ES DIVISIBLE POR DOS//


var numero
numero=parseInt( prompt("Ingrese un numero entero"))
if(numero%2 == 0 ){
    document.write("El numero es divisible por 2")

} else {
    document.write("El numero no es divisible por 2")
}

var numero
numero=parseInt( prompt("Ingrese un numero entero"))
if((numero%7) == 0 || (numero%5) == 0 || (numero%3)== 0 || (numero%2 ) == 0) {
    document.write("El numero es divisible por 7, 5, 3 o 2")
} else{
    document.write("El numero no es divisible  ni por 7, 5, 3 o 2")

}

var numero
numero=parseInt(prompt("Ingrese un numero entero"))


    if((numero%7) == 0 ){
        document.write("El numero es divisible por 7.<br>")
    }
    if((numero%3) == 0 ){
        document.write("El numero es divisible por 3.<br>")
    }
    if((numero%5) == 0 ){
        document.write("El numero es divisible por 5.<br>")
    }
    if((numero%2) == 0 ){
        document.write("El numero es divisible por 2.<br>")
    }
    

    var num
    num=parseInt(prompt("Ingrese un numero entero"))
    
    for(i=num;i>=1;i--){
    if((num%i)== 0){
        document.write( i +" es divisor <br>")
    }

}   

    var num1
    num1=parseInt(prompt("Ingrese un numero entero"))
    
    var num2
    num2=parseInt(prompt("Ingrese un numero entero"))

    var numMenor
     
    
    if(num1 < num2){

    numMenor=num1
    }else{
    numMenor=num2
    }

    for(var i=numMenor; i>=1; i--){
    if((num1%i) == 0 && (num2%i) ===0 ){
        document.write("Los divisores comunes a ambos numeros son: " + i)

    }
    

} 
       
    var num
    num=parseInt(prompt("Ingrese un numero entero"))
   var cont=0 
    for(var i=num;i>=1;i--){
    if((num%i)==0 ){
        cont++
    }  
      
    }   
    if(cont == 2){
    document.write( num + " es primo")
   } else{
    document.write(num + " no es primo")
   }


   var num
   num=parseInt(prompt("Ingrese su edad"))

    if(num >= 18){
        document.write("Puede obtener carnet de conducir")  
    }else{
        document.write("No alcanza la mayoria de edad")  
    }
    
   var nota
   nota=parseFloat(prompt("Ingrese la nota obtenida"))
   
   if(nota >=9) {
    document.write("Sobresaliente")
   } else if(nota >=7){
        document.write("Notable")
    } else if(nota >=6){
        document.write("Bien")
    } else if(nota >=5){
        document.write("Suficiente")
    } else if(nota >=3){
        document.write("Insuficiente")
    }
else{document.write("Muy deficiente")}
  



var espacio=""
do{(cadena=prompt("Introducir cadena"))
    if(espacio == ""){
        espacio+=cadena
    }else{
        espacio =  espacio + "-" + cadena;
    }
    

}while(confirm("Hay mas cadenas?"))

document.write(espacio) 
    
var suma = 0;




var n
var suma=0
do{
    n=prompt("Introducir numero")
    if(Number(n) == n){
        n=Number(n)
        suma=Number(suma)
        suma+=n
    } 
    else if(isNaN(n)) { 
           alert(n + " No es un numero");
        }
    
} while(n!=undefined || confirm("Desea continuar?") )
 
document.write("la suma es :" + suma)

var space=""

for(i=6;i>=1;i--){
    space=""
    for(j=1;j<=i;j++){
     space+=i
     }
     document.write('<p style="font-family:monoespace">'+ space +"</p>")
}
    /*VERR*/
var space=""
for( var i=1;i<=500;i++){
    
    if((i%4)==0){
        
      document.write(+ i +"Multiplo de cuatro"  + "</p>")
        }  
        if((i%5)==0){
        
            document.write( "<hr>")
            }  

            if((i%9)==0){
        
                document.write( space + "Multiplo de nueve")
                }  
    document.write('<p style="font-family:monoespace">'+ i +"</p>")
}

/*TABLAS DE MULTIPLICAR*/

function tablaMultiplicar(n){

    for( let i=1;i<=10;i++){
      
        document.write("<p> 2 x " + i + "= " + n*i + "</p>")
    
        }
    }
    let m=parseInt(prompt("Diga un numero de 1 al 12"))
    tablaMultiplicar(m)

function mostrarPorconsola(x){
        console.log(x)
    }


mostrarPorconsola(5)
mostrarPorconsola("hola")
mostrarPorconsola(true)

var aCubo= x => x*x*x;
console.log(aCubo(3))
console.log(aCubo(2))


var x =0

function sumar(y,z){
    return y+z+x
}


function siguiente(n){
    return n+1
}
function doble(n){
    return 2*n
}
function cuadrado(n){
    return n*n
}
function imprimirValores(n){

   document.write("siguiente: " , siguiente(n),doble(n), cuadrado(n))

}
let n=2
imprimirValores(n)

---------------------------------------------------------------------------------------
/*PRACTICA NUMERO 2*/
 
 function mostrarvariasVeces(n){
     for (let i=0;i<n;i++){
        console.log("Bienvenidos al Curso Full Stack")

     }
         
 } 
 
mostrarvariasVeces(n)
/*TRES VARIANTES DE FUNCION MAXIMO*/
let a = 8
let b = 3
function max(a,b){
    if(a<b){
        console.log(b)
    }else{
        console.log(a)
    }
}
 max(a,b)


function Max(a,b){
    if(a > b){
         return a
    }else if(b > a){
        return b
    }else{
       return a == b
    }
} 
 
console.log(Max(a,b))

let c=parseInt(prompt("Ingrese un numero entero"))
let d=parseInt(prompt("Ingrese otro numero entero"))

function Maximo(c,d){
    if(c > d){
         return c
    }else if(d > c){
        return d
    }else{
       return console.log("Los numeros ingresados son iguales")
       
    }
} 
 console.log(Maximo(c,d))

 let m=parseInt(prompt("Ingrese un numero entero"))
 let p=parseInt(prompt("Ingrese otro numero entero"))
 let q=parseInt(prompt("Ingrese otro numero entero"))
let prom
function promedio3(m,p,q){
 let prom=(m+p+q)/3
 return prom
  
}
console.log(promedio3(m,p,q))


let suma=0
let prome=0
let cant=1
let nota=0
function promedioNotasLeidas(nota){
    
    while(nota!=-1){
        if(cant > 0){
    prome= (suma+=nota)/cant
     }
    cant++
    nota=parseInt(prompt("Ingrese la nota obtenida"))
    }
   return prome
}
console.log(promedioNotasLeidas(nota))

let n=2
function imprimirDobleSiguiente(n){
    console.log(doble(siguiente(n)))
}
imprimirDobleSiguiente(n)
/*DOS FORMAS DE ANIDAR FUNCIONES 1*/

function imprimirDobleSiguiente(n){
    return(doble(siguiente(n)))
}
function imprimirDobleSiguienteCuadrado(n){
   console.log(cuadrado(imprimirDobleSiguiente(n)))
}

imprimirDobleSiguienteCuadrado(n)
/*2 */
function imprimirDobleSiguienteCuadrado(n){
    console.log(cuadrado(doble(siguiente(n))))
 }
 imprimirDobleSiguienteCuadrado(n)

 let l=5
 function perimetro(l){
     return l*4
 }
 console.log(perimetro(l))

 function superficieCuadrado(l){
     return l**2
 }
 console.log(superficieCuadrado(l))

 let r = 4.2
 function areaCirculo(r){
     return Math.PI*(r**2)
 }
 console.log(areaCirculo(r))


let cant
 function cantDiasMes(cant){
     
         if(cant==11 || cant==9 || cant==6 || cant==4){
            return 30
         }else if(cant==2){
            return 28
         }else{
            return 31
         }
     }
 
 console.log(cantDiasMes(cant))

 let anio
 function anioBisiesto(anio){
     if(((anio%4==0 && anio%100!=0) || (anio%400==0))){
        //console.log("El año " + anio + " es bisiesto" ) 
     }else {
         //console.log("El año " + anio + " no es bisiesto" )
     }
     
 }
 //anioBisiesto(anio)
 
 
 function diaMesAnio(dia,mes,anio){
    if(dia > 0 && dia <=31){ 
    if(mes==11 || mes==9 || mes==6 || mes==4){
        return 30 
    }else if(mes==2 && (anio%4==0 && anio%100!=0) || (anio%400==0)){
        return 29
    }else if(mes==2){
        return 28
    }else if(mes==8 || mes==3 || mes==5 || mes==10 || mes==12 || mes==1 ||mes==7){
        return 31
    }
 }else{
    //console.log("Volver a ingresar dia valido")
 }
}  
//console.log(diaMesAnio(dia, mes, anio))

//**********************************************************************/  

var dia=parseInt(prompt("Ingrese un dia"))
var mes=parseInt(prompt("Ingrese numero de mes"))
anio=parseInt(prompt("Ingrese el anio"))
parseInt(mes)
parseInt(dia)
let mesant=mes-1
let anioant=anio-1
let mesUltimo=mes+11

function diaAnterior(dia,mes,anio){
    if(dia==1){
    if(mes==11 || mes==9 || mes==6 || mes==4){ 
    console.log(diaMesAnio(dia,mesant,anio) +"/"+ (mes-1) + "/"+ anio)  
    }
    if(mes==3 && anioBisiesto(dia,mes,anio)){
    console.log(diaMesAnio(dia,mesant,anio) +"/"+ (mes-1) + "/"+ anio) 
    
    }else if((mes==3)&& !anioBisiesto(dia,mes,anio)){
    console.log(diaMesAnio(dia,mesant,anio) +"/"+ (mes-1) + "/"+ anio)
    }
    if(mes==1){
    console.log(diaMesAnio(dia,mesUltimo,anioant) +"/"+ (mesUltimo) + "/"+ (anio-1))
    }    
    if(mes==2){
    console.log(diaMesAnio(dia,mesant,anio) +"/"+ (mes-1) + "/"+ anio)
    }   
    if(mes==8){
    console.log(diaMesAnio(dia,mesant,anio) +"/"+ (mes-1) + "/"+ anio)
    }     
    if((mes==5)||( mes == 10)||(mes == 12)||(mes==7)){
    console.log(diaMesAnio(dia,mesant,anio) +"/"+ (mes-1) + "/"+ anio)
     }
    }else{
        return dia-1
       }
    }
    if(dia!=1){
    console.log(diaAnterior(dia, mes, anio) + "/" + mes + "/"+ anio) 
    } else{
    diaAnterior(dia,mes,anio) 
    } 


var dia=parseInt(prompt("Ingrese un dia del mes"))
var mes=parseInt(prompt("Ingrese numero de mes"))
anio=parseInt(prompt("Ingrese el anio"))
    function ultimoDiaMes(dia,mes,anio){
    return diaMesAnio(dia,mes,anio)
}console.log(ultimoDiaMes(dia, mes, anio) + "/" + mes + "/"+ anio)
    

 //STRINGS*/
 var edades=[18,20,22,45,53,57,45,34,23,65]
 var i=0
 
 while(i<edades.length ){
 console.log(edades[i])
 i++
 }  
 console.log(edades[i])
 
 let edades=[18,20,22,45,53,57,45,34,23,65]
 var i=0
 
 while(i<edades.length ){
    if(edades[i]%2==0){
    console.log(edades[i])
}
 i++
 }  
 console.log(edades[i])

 for(i=0;i<edades.length;i++){
    if(edades[i]%2==0){
    console.log(edades[i])
    } 
 }


  var numeros = [ 25,20,22,45,53,18,45,34,23,65 ];

    var min = numeros[0];
    function valorMinimo(numeros){
    
    
    for (var i = 0; i < numeros.length ; i++) {
        if (numeros[i] < min) {
            console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + numeros[i]);
            min = numeros[i];
        }
    }
    console.log('Valor mínimo: ' + min);  
}
console.log(valorMinimo(numeros))


var numeros = [ 25,20,22,45,53,18,45,34,23,65 ];

var max = numeros[0] ;
function valorMaximo(numeros){
for (var i = 0; i < numeros.length ; i++) {
    if (numeros[i] > max) {
        console.log('Anterior maximo: ' + max + ', nuevo maximo: ' + numeros[i]);
        max = numeros[i];
    }
}
console.log('Valor maximo: ' + max);  
}
console.log(valorMaximo(numeros))


var valor=[25,20,22,45,57,53,18,45,34,23,65]
var index=1
function valorPorPosicion(index,valor){
    for(var i = 0; i < valor.length ; i++){
      if(index==i) {
        console.log(valor[i])
      }
       

    }

}console.log(valorPorPosicion(index,valor))



let valor=[25,20,22,45,57,53,18,53,45,34,23,65,20]
let duplicados=[];

function igualValor(valor){

for(let i = 0; i<valor.length ; i ++){
    for( let j=i+1;j<valor.length;j++){
      if(valor[i]==valor[j]){
        duplicados.push(valor[i]);
        
      }
    }
  }
  return duplicados
}
console.log(igualValor(valor))


let MyColor=["Red","Green","White","Black"]
function mostrarArray(MyColor){
    for(let i = 0; i<4 ; i ++){
        return MyColor
    }
}console.log(mostrarArray(MyColor))


let n=[3,4,5,7,5,4]

function revertir(n){
   return n.reverse()
}console.log(revertir(n))

 

var str;
function mostrarSinSeparacion(cad){
cad=["w","e","b","m","a","s","t","e","r"].sort()
for (var i = 0; i < cad.length; i++) {
  str+=cad[i]+"";
 }
 return str
}
console.log(mostrarSinSeparacion(str))

cad=("prince of persia")
function capitalizar(cad){
    
return (cad.charAt(0).toUpperCase().concat(cad.substring(1,7))
.concat( cad.charAt(7).toUpperCase().concat(cad.substring(8,10))
.concat(cad.charAt(10).toUpperCase().concat(cad.substring(11,16)))))
} console.log(capitalizar(cad))

let texto=("Tutorial de Desarrollo Web")
function palabraMasLarga(texto) {
	var palabra = texto.split(' ');
	var resultado = "";
	
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i].length > resultado.length) {
			resultado = palabra[i];
		}
	}
	  return resultado;
}

console.log(palabraMasLarga(texto));




