function sortTable(n){
	var table = document.getElementById('table'); //таблица
	var rows, i, x, y, shouldSwitch, switchCount = 0;
	var switching = true;
	var dir = "asc"; //направление сортировки
	while(switching) {
		switching = false;
		//считываем строку
		rows = table.getElementsByTagName("tr"); 
		for(i = 1; i < (rows.length - 1); ++i) {
			shouldSwitch = false;
			//и 2 элемента для сравнения
			x = rows[i].getElementsByTagName("td")[n]; 
			y = rows[i + 1].getElementsByTagName("td")[n];
			//проверяем направление сортировки
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (dir = "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		//если необходимо, то меняем местами
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			++switchCount;
		}
		//если закончили сортировку, то меняем направление для след. сортировки
		else if (switchCount == 0 && dir == "asc") {		
			dir = "desc";
			switching = true;
		}
	}
}
