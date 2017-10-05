/*
Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números
*/
//funcion principal
function principal(resp){
    do{ 
        //pide al usuario que ingrese la opcion para ejecutar alguna de las funciones
        var resp = prompt("que desea hacer: 1. Cifrar texto - 2. Decifrar texto");

        //si la respuesta es distinta a un campo vacío
        if(resp != ""){
            //si la respuesta es "1", se ejecuta la funcion cipher()
            if(resp === "1"){
                cipher();

            //si la respuesta es "2", se ejecuta la funcion decipher()
            }else if(resp == "2"){
                decipher();

            }else{  
                alert("ingrese opcion valida");
            }
        }
    //si la respuesta es 
    }while(resp =="" || (resp!="1" && resp!="2")); zzzzz,
}

//texto ingresado a cifrado de cesar
function cipher(string){

    do{
        //se pide el texto a cifrar
        string = prompt("Ingrese el texto a cifrar");

        //arreglo vacio para guardar el codigo ascii
        var ascii = [];

        //arreglo vacio para guardar el nuevo string cifrado
        var cipherString = [];

        //primer for para recorrer el texto ingresado
        for(var i=0; i<string.length; i++){

            //obtengo el codigo ascii y lo pongo en un arreglo "ascii"
            ascii.push((string.charCodeAt(i)-65+33)%26+65);
        }

        //recorro el arreglo "ascii"
        for(var j=0; j<ascii.length; j++){

            //transformo a letra lo obtenido en el for anterior y lo meto en otro arreglo "cipherString"
            cipherString.push(String.fromCharCode(ascii[j]));
        }
        //retorna en un alert el nuevo string
        return alert(cipherString.join(""));

    }while(string!="");//mientras el string no este vacio se ejecuta lo que esta en el do
    
}
//funcion para decifrar el texto
function decipher(string){

}

//se ejecuta la funcion principal
principal();



