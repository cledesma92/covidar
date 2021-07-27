const API_URL = 'https://api.covid19api.com/live/country/argentina';
const opts = { crossDomain: true}; //Sirve para especificarle a jQuery que el reques se va a hacer hacia otra página.
const mostrarFecha = document.querySelector(".fecha");
const mostrarConfirmados = document.querySelector(".casos-confrimados");
const mostrarMuestesTotales = document.querySelector(".muertes-totales");
const mostrarRecuperados = document.querySelector(".recuperados");
const mostrarActivos = document.querySelector(".casos-activos");

const onRespons = function(data){ //Este sería el callback (una función que se pasa como argumeno de otra función)
    //console.log(arguments);
    //fn(data, textStatus, jqXHR)
    //[{...}, String, {...}]
    let ultimoElemento = (data.length)-1;
    mostrarFecha.innerText = (data[ultimoElemento].Date).substr(0,10);
    mostrarConfirmados.innerText = (data[ultimoElemento].Confirmed).toLocaleString('de-DE');
    mostrarMuestesTotales.innerText = (data[ultimoElemento].Deaths).toLocaleString('de-DE');
    mostrarRecuperados.innerText = (data[ultimoElemento].Recovered).toLocaleString('de-DE');
    mostrarActivos.innerText = (data[ultimoElemento].Active).toLocaleString('de-DE');
}

//jQuery.get( url [, data ] [, success ] [, dataType ] )
//  url: ‎cadena que contiene la dirección URL a la que se envía la solicitud.‎
//  data: ‎objeto sin formato o cadena que se envía al servidor con la solicitud
//  success: función de callback que se ejecuta si la solicitud se realiza correctamente.
//  dataType: ‎para especificar el tipo de datos esperados del servidor. Valor predeterminado: Intelligent Guess (xml, json, script, text, html).‎

$
    .get(API_URL, opts, onRespons)
    .fail(() => {
    console.log('Sucedió un error. No se pudo obtener la información solicitada')
});