/**
 * Created by ceciliachalar on 8/24/2015.
 */

/* solo se pueden usar una  sola vez
* */
/**
 *
 * @param numA
 * @param numB
 * @param callback
 * @returns {*}
 */
var doOperation = function (numA, numB, callback){
    callback();
    callback();
    callback();
    callback();
    return numA + numB;
};

/*
var sayHello = function(){
    console.log('hello');
};
/*
sin funcion anomima se podria llamar  a la funcion desde afuera
doOperation(1,3,sayHello());
sayHello();
sayHello();
ahora usando funcion anonima
*/
doOperation(1,3,function(){
    console.log('hello');
});


//Funcion autoejecutable y anonima
//()();
//llega al punto , ejecuta la funcion
//se quita el nombre de va fincion
/*
var sayHello = function(){
    console.log('hello cc');
};
*/
/*
(function(){
    console.log('Anonymous: hello cc');
})();

var sayHello = function(name){
    if(!name)
    name = 'world';
    console.log('hello ', name);
};
sayHello('Zecita');

*/

(function(name){
    if(!name)
        name = 'world2';
    console.log('Anonymous: hello ', name);
})('ceci');
