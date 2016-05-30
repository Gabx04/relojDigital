function reloj() {
	var semana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
	//hora
	var data = new Date();
	var hora= data.getHours();
	hora = (hora<10)?"0"+hora:hora
	var minutos = data.getMinutes();
	minutos = (minutos<10)?"0"+minutos:minutos
	var segundos= data.getSeconds();
	segundos = (segundos<10)?"0"+segundos:segundos
	var horaActual = hora +": "+minutos;
	document.getElementById("hora").innerHTML = horaActual;
	//fecha
	var arrSem = data.getDay();
	var diaSem = semana[arrSem];
	var dia = data.getDate();
	var arrMes = data.getMonth();
	var mes = meses[arrMes];
	var fechaActual = diaSem+", "+dia+" de "+mes;
	document.getElementById("fecha").innerHTML = fechaActual;
}
setInterval("reloj()", 1000)

function relojesCapitales(id) {
	if (document.getElemtById(id).checked()){
		
	}

}