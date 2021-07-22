const API_URL = 'https://api.covid19api.com/live/country/argentina';
const opts = { crossDomain: true};
const mostrarFecha = document.querySelector(".fecha");
const mostrarConfirmados = document.querySelector(".casos-confrimados");
const mostrarMuestesTotales = document.querySelector(".muertes-totales");
const mostrarRecuperados = document.querySelector(".recuperados");
const mostrarActivos = document.querySelector(".casos-activos");


$.get(API_URL, opts, 
    function(data){
        mostrarFecha.innerText = data[(data.length)-1].Date;
        mostrarConfirmados.innerText = (data[(data.length)-1].Confirmed).toLocaleString('de-DE');
        mostrarMuestesTotales.innerText = (data[(data.length)-1].Deaths).toLocaleString('de-DE');
        mostrarRecuperados.innerText = (data[(data.length)-1].Recovered).toLocaleString('de-DE');
        mostrarActivos.innerText = (data[(data.length)-1].Active).toLocaleString('de-DE');
    });