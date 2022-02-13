//string
//Number
//booleano
//date
//BigInt
//symbol
//object
//null
//undefined


//date

//Imprime el tipo de dato
function print(data,type) {
    console.log(`Esto es un [${type}]`,
    data,
    `el tipo de dato es [${typeof data}]`
    );
}

// string
const cadena = "Vegeta";
print(cadena,"string");

// number
const numberInt = 100;
const numeroDouble = 10.3412;

print(numberInt,"number")
print(numeroDouble,"number")

//booleano
const isShow=false;
print(isShow,"BOOLEANO")

//BigInt
const normalNumber = 9999999999999999;
print(normalNumber,"NUMERO NORMAL");

const bigNumber = 9999999999999999n;
print(bigNumber,"NUMERO NORMAL");


//object

const data = {
    id: 1,
    Text: "Hello, world",
    suma: function(){
        console.log("suma a + b = 10");
    },
    autores:[
        {
            id: 1,
            nombre:"Picaso"
        },
        {
            id: 2,
            nombre:"Aldo"
        },
    ],
    libros:{
        a:{
            id: 1,
        },
    },
};
print(data,"OBJETO");

//null
const IS_NULL = null;
print(IS_NULL,"NULO");

//undefined
const indefinido = undefined;
print(undefined,"UNDEFINED");

//dates
const fecha = new Date();
const actual = fecha.getDate();
print(actual,"FECHA");
