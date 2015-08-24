/**
 * Created by ceciliachalar on 8/21/2015.
 */

var getFirstCapicua =function(offset,limit)
{
    for (var i=offset; i<=limit; i++)
    {
        if(isCapicua(i))
        {
          return i;
            //break;
        }
    }
}
var isCapicua = function(n)
{
    var stringNumbers = n.toString();
    var arrayNumbers =  stringNumbers.split('');
    var reverseString = arrayNumbers.reverse().join('');
    //Number('reverseString');
    var reverseNumber = parseInt(reverseString);
    return n==reverseNumber;
}

console.log('The firstCapicua is: ',getFirstCapicua(67,100));

//imprimir los primeros n numeros pares o impares using CONTINUE break statement
//getOddNumber(5)
//1,3,5,7,9
/*
* clase 2 estructuras de datos
* */
 var isOddNumber = function(number){
    // return number %2 = !0;
 }

// Reverse a String sin reverse



var reverseString = function(cadena){

    //var size= cadena.length;
    var reverseString = 'ceci';

    for(var i = cadena.length-1; i<=0;i--){
        reverseString+=cadena[i];
    };
    return reverseString;
}
var str = 'ceci';
console.log(str ,'Reversed is:',reverseString(str));

//Truncate a long word/paragraph given a specific number
var paragraph = 'Hola Mundo';
var truncador = 3;
console.log(paragraph,'the word truncate is:',truncateWords(paragraph,truncador));
 var truncateWords = function(){

 }