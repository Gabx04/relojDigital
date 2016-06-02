$(document).ready(function() {
	reloj();
	fecha();
	/*
	$(".capital").on("click", function(){
		valorData = $(this).attr("data");
		if ($(this).is(":checked")){
			$("#horaCapitales").append('<span id="cap'+valorData+'" class="capitales"></span><span id="hora'+valorData+'" class="horas"></span>');
			var nombre = capitales[valorData].ciudad;
			$("#cap"+valorData).html(nombre);
			horaCapital();
		} else {
			$("#cap"+valorData).remove();
			$("#hora"+valorData).remove();
		}
	})
	*/
	$(".capital").on("click", function(){
		valorData = $(this).attr("data");
		if ($(this).is(":checked")){
			$("#horaCapitales").append('<span id="cap'+valorData+'" class="capitales"></span><span id="hora'+valorData+'" class="horas"></span>');
			var nombre = capitales[valorData].ciudad;
			$("#cap"+valorData).html(nombre);
			horaCapital(value);
		} else {
			$("#cap"+valorData).remove();
			$("#hora"+valorData).remove();
		}
	})
	
});
function reloj() {
	var data = new Date();
	var hora = data.getHours();
	var amp = "";
	if (hora>12){
		hora = hora-12;
		amp = "PM";
	} else if(hora == 12){
		amp = "M";
	} else if(hora<12) {
		amp = "AM";
	}
	hora = (hora<10)?"0"+hora:hora;
	var minutos = data.getMinutes();
	minutos = (minutos<10)?"0"+minutos:minutos;
	var segundos= data.getSeconds();
	segundos = (segundos<10)?"0"+segundos:segundos;
	var horaActual = hora +": "+minutos+": "+segundos;
	document.getElementById("horaActual").innerHTML = horaActual;
	document.getElementById("amp").innerHTML = amp;
}
function fecha() {
	var data = new Date();
	var semana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
	var arrSem = data.getDay();
	var diaSem = semana[arrSem];
	var dia = data.getDate();
	var arrMes = data.getMonth();
	var mes = meses[arrMes];
	var fechaActual = diaSem+", "+dia+" de "+mes;
	document.getElementById("fecha").innerHTML = fechaActual;
}
setInterval("reloj()", 1000);

setInterval("fecha()", 1000);

var valorData = 0;
var capitales = [
	{ciudad:"Chicago", hora:0},
	{ciudad:"Sao Paulo", hora:2},
	{ciudad:"Santiago", hora:2},
	{ciudad:"México D.F.", hora:1},
	{ciudad:"Caracas", hora:1},
	{ciudad:"Brasilia", hora:2},
	{ciudad:"Quito", hora:0},
	{ciudad:"Guayaquil", hora:0},
	{ciudad:"Santa Marta", hora:1},
	{ciudad:"Bogotá", hora:1},
	{ciudad: "Lima", hora: 0}
]
function horaCapital(val) {
	adicional = capitales[val].hora;
	var num = val;
	var idh = 'hora'+valorData;
	relojesCapitales();
	var comenzar = setInterval("relojesCapitales("+valorData+","+adicional+")", 1000);	
}
function relojesCapitales(valor, ad) {
	var data2 = new Date();
	var hora = data2.getHours() + ad;
	var amp = "";
	if (hora>12){
		hora = hora-12;
		amp = "PM";
	} else if(hora == 12){
		amp = "M";
	} else if(hora<12) {
		amp = "AM";
	}
	hora = (hora<10)?"0"+hora:hora;
	var minutos = data2.getMinutes();
	minutos = (minutos<10)?"0"+minutos:minutos;
	var segundos= data2.getSeconds();
	segundos = (segundos<10)?"0"+segundos:segundos;
	var horaActual = hora +": "+minutos+": "+segundos;
	document.getElementById("hora"+valor).innerHTML = horaActual;
	document.getElementById("amp").innerHTML = amp;
}