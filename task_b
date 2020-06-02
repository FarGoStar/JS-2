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
function addRow(){
  event.preventDefault();
  var table = document.getElementById('table'); //таблица
  var txt = [];                                 //массив с информацией из формы
  var tr = table.insertRow(-1);									//добавляем строку
  txt[0] = document.createTextNode(document.getElementById("inputOwner").value);
  txt[1] = document.createTextNode(document.getElementById("inputNum").value);
  txt[2] = document.createTextNode(document.getElementById("inputMark").value);
  txt[3] = document.createTextNode(document.getElementById("inputModel").value);
  txt[4] = addDeleteButton();										//добавляем кнопку удаления стр.
  for (var i = 0; i <= 4; i++){ 
    var tc = tr.insertCell(-1);
    tc.appendChild(txt[i]);
  }
	 document.getElementById("form").reset();
}
function addDeleteButton(){
	//создаем кнопку удаления строки
  var deleteBtn = document.createElement('button')
  //присваиваем необходимые данные
	{																		
    deleteBtn.setAttribute("onclick","deleteRow()");
    deleteBtn.type = 'button';
    deleteBtn.appendChild(document.createTextNode("Удалить строку"));
  }
  return deleteBtn;
}

function deleteRow() {
	var tr = event.target.parentNode.parentNode;
	tr.parentNode.removeChild(tr);
}
