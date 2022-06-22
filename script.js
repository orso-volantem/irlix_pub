window.onload = function () {
	const date = new Date();
	const space = " ";
	const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
	let month = months[date.getMonth()];
	document.getElementById("date").innerHTML = date.getDate() + space + month + space + date.getFullYear();
};