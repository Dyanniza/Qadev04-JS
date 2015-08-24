/**
 * Created by ceciliachalar on 8/14/2015.
 */

    var Calculator = function () {
    var aux = this;

    this.calculateOperations = function () {
        if (arguments.length == 0)
            throw 'Cannot evaluate without params';
        console.log('la suma es:', this.getSum(arguments, arguments.length - 1));
        console.log('la maximo es:', this.getMax(arguments));
        console.log('la minimo es:', this.getMin(arguments));
        console.log('El promedio es:', this.getAverage(arguments));
    };


    this.getSum = function (numbers, pos) {

        if (pos === undefined) {
            pos = numbers.length - 1;
        }
        var currentVal = numbers[pos];
        if (pos == 0)
            return numbers[pos];
        //en una funcion el return se ejecuta un ves y ya no mas/
        //else funcionaria igual con else
        else
            return numbers[pos] + this.getSum(numbers, pos - 1);
    };

    this.getAverage = function(numbers,tam)
    {
        var suma =this.getSum(numbers, tam);
        return suma / numbers.length;

    }

    this.getMax = function (numbers, pos,max) {
        if (pos === undefined) {
            pos = numbers.length - 1;
        }
        if(max === undefined||numbers[pos]>max){
        //if(max === undefined){
            max = numbers[pos];
        }
        if (pos == 0)
            return max;
        else
            return this.getMax(numbers,pos-1,max);
    };


    this.getMin = function (numbers, pos,min) {
        if (pos === undefined) {
            //empezando a iterar y asumimos q el ultimo es el max
            pos = numbers.length - 1;
        }
        if(min === undefined||numbers[pos]<min){
            //if(max === undefined){
            min = numbers[pos];
        }
        if (pos == 0)
            return min;
        else
            return this.getMin(numbers,pos-1,min);
    };


    this.getSum2 = function () {
        var numbers = arguments;
        var pos;
        if (pos === undefined) {
            pos = numbers.length - 1;
        }
        var currentVal = numbers[pos];
        if (pos == 0)
            return numbers[pos];
        //en una funcion el return se ejecuta un ves y ya no mas/
        //else funcionaria igual con else
        else
            return numbers[pos] + this.getSum(numbers, pos - 1);
    };



}

var calculator = new Calculator();
calculator.getSum2(1,5,7,5);
calculator.calculateOperations(22,1,8,10);
calculator.getMax(1,23);


this.calculateSum = function()
{
    if (typeof arguments[0] == 'object')
        return this.getSum(arguments[0]);
    return this.getSum(arguments);
};


this.calculateMax = function()
{
    if (typeof arguments[0] == 'object')
        return this.getMax(arguments[0]);
    return this.getMax(arguments);
};


this.calculateMin = function()
{
    if (typeof arguments[0] == 'object')
        return this.getMin(arguments[0]);
    return this.getMin(arguments);
};


this.calculateAverage = function()
{
    if (typeof arguments[0] == 'object')
        return this.getAverage(arguments[0]);
    return this.getAverage(arguments);
};


this.calculateOperations2 = function()
{

    var pos = arguments.length - 1;
    if(arguments.length == 0)
    {
        throw  "cant evaluate";
    }
    console.log('This sum is: ', this.calculateSum(arguments));

};



