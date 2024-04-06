function calculo(){
    //Recogida de informacion de los inputs en el html
    var peso = parseFloat(document.getElementById("kilo").value);
    var altura = parseFloat(document.getElementById("altura").value);

    //conversion de kilos a libras y  de metros a pies
    p= peso*0.453562;
    a=altura*0.3048;
    // validacion de los numeros que no sea un numero nulo o cualquie otro caracter
    if(isNaN(p)|| isNaN(a))
    {
        alert('Ingrese un numero valido')
        return;
    }else
    //calculo final 
    {
        calculofinal= p/(a*a);
        //documentacion en el html
        document.getElementById('resultado1').innerText = "Su indice de masa corporal es:"+calculofinal;

    }
}


