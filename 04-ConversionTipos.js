//string to number


//Imprime el tipo de dato
function print(value) {
    console.log(`El valor es [${value}], con el tipo de dato es[${typeof value}]`
    );
}

let number = "10.32323";
print(number);

number = Number(number);
print(Number(number));

// number = parseInt(number);
// print(number);

number = parseFloat(number);
print(number);

//number to string 

number = 111.2;
number = String(number);
print(number);

//Booleano to number
let booleano =  true;
booleano = Number(true);
print(booleano);

//false,null,undefined y "" dan 0
//caso contrario da 1

booleano = Boolean("hola");
print(booleano);

//como dato
let a = +"10.2";
let b =10;
console.log(a+a+b);